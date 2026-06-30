import { writable } from "svelte/store";

const BACKEND_URL_SOURCE = "https://raw.githubusercontent.com/nexus-quantitative/nexus-quantitative.github.io/main/backend-url.txt";

export interface Liquidation {
  side: string;
  usd_value: number;
  price: number;
  ts: number;
  symbol: string;
  exchange?: string;
}

export interface AggressionWindow {
  label: string;
  buy_usd: number;
  sell_usd: number;
  delta: number;
  ratio: number;
}

export interface AggressionSnapshot {
  symbol: string;
  windows: AggressionWindow[];
  sources: string[];
  updated_at: number;
}

export interface TelemetryState {
  enabled: boolean;
  natsOk: boolean | null;
  streamsOnline: number;
  streamsTotal: number;
  engineRunning: boolean;
  
  // BTC market data
  btcPrice: number;
  btcOI: number;
  btcFunding: number;
  btcNextFunding: number;
  btcUpdatedAt: number;

  // Liquidations
  recentLiqs: Liquidation[];
  latestWhaleLiq: Liquidation | null;
  rawLiquidation: Liquidation | null;

  // Aggression Flow
  btcAggression: AggressionSnapshot | null;
}

const ENV_API_URL: string = import.meta.env.VITE_ARK_API_URL ?? "";
let activeApiUrl = ENV_API_URL;
export const apiUrl = writable<string>(ENV_API_URL);

async function resolveApiUrl(): Promise<string> {
  if (ENV_API_URL) return ENV_API_URL;
  try {
    const resp = await fetch(BACKEND_URL_SOURCE, { cache: "no-store" });
    if (resp.ok) {
      const url = (await resp.text()).trim();
      if (url) return url;
    }
  } catch {}
  return "";
}

// The standard set of collectors running on ark-streams
const DEFAULT_STREAMS = [
  "BitgetTicker/BTCUSDT",
  "BitgetTicker/XAUUSDT",
  "CandleCollector/btcusdt/1m",
  "CandleCollector/btcusdt/5m",
  "CandleCollector/btcusdt/15m",
  "CandleCollector/btcusdt/1h",
  "CandleCollector/btcusdt/4h",
  "CandleCollector/btcusdt/1d",
  "CandleCollector/btcusdt/1w",
  "CandleCollector/xauusdt/1m",
  "CandleCollector/xauusdt/5m",
  "CandleCollector/xauusdt/15m",
  "CandleCollector/xauusdt/1h",
  "CandleCollector/xauusdt/4h",
  "CandleCollector/xauusdt/1d",
  "CandleCollector/xauusdt/1w",
  "OKXLiquidationCollector",
  "BitgetLiquidation",
  "FundingRate/btcusdt",
  "FundingRate/xauusdt",
  "OpenInterest/btcusdt",
  "OpenInterest/xauusdt",
  "AggTradeBybit/BTCUSDT",
  "AggTradeOKX/BTCUSDT"
];

// Track active streams in a local Set
const activeStreams = new Set<string>();

const AGGRESSION_WINDOWS = [
  { label: "5m", windowMs: 5 * 60 * 1000 },
  { label: "1h", windowMs: 60 * 60 * 1000 },
  { label: "1d", windowMs: 24 * 60 * 60 * 1000 },
];

function buildAggressionSnapshot(liqs: Liquidation[]): AggressionSnapshot | null {
  const latestTs = liqs.reduce((latest, liq) => Math.max(latest, liq.ts), 0) || Date.now();
  const offset = Date.now() - latestTs;
  const referenceTime = Date.now();
  const normalizedLiqs = liqs.map((liq) => ({
    ...liq,
    ts: liq.ts + offset,
  }));

  const windows = AGGRESSION_WINDOWS.map(({ label, windowMs }) => {
    const cutoff = referenceTime - windowMs;
    let buy_usd = 0;
    let sell_usd = 0;

    for (const liq of normalizedLiqs) {
      if (liq.symbol !== "BTCUSDT" || liq.ts < cutoff) continue;

      if (liq.side?.toUpperCase() === "BUY") {
        buy_usd += liq.usd_value;
      } else {
        sell_usd += liq.usd_value;
      }
    }

    const delta = buy_usd - sell_usd;
    const ratio = sell_usd > 0 ? buy_usd / sell_usd : buy_usd > 0 ? buy_usd : 1;

    return {
      label,
      buy_usd,
      sell_usd,
      delta,
      ratio,
    };
  });

  if (windows.every((window) => window.buy_usd === 0 && window.sell_usd === 0)) {
    return null;
  }

  return {
    symbol: "BTCUSDT",
    windows,
    sources: ["liquidations-history"],
    updated_at: referenceTime,
  };
}

export const telemetry = writable<TelemetryState>({
  enabled: !!ENV_API_URL,
  natsOk: null,
  streamsOnline: 0,
  streamsTotal: 0,
  engineRunning: false,
  btcPrice: 0,
  btcOI: 0,
  btcFunding: 0,
  btcNextFunding: 0,
  btcUpdatedAt: 0,
  recentLiqs: [],
  latestWhaleLiq: null,
  rawLiquidation: null,
  btcAggression: null,
});

let openSockets: WebSocket[] = [];
let reconnectTimers: ReturnType<typeof setTimeout>[] = [];
let healthTimer: ReturnType<typeof setInterval>;
let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
let destroyed = false;
let isStarted = false;
let aggressionLiveSeen = false;

function wsBase(url: string) {
  return url.replace(/^https/, "wss").replace(/^http/, "ws");
}

async function fetchHealth() {
  try {
    const r = await fetch(`${activeApiUrl}/api/health`);
    const d = await r.json();
    const isOk = d.status === "ok";
    
    // If healthy and we haven't tracked active streams yet, seed the default collectors
    if (isOk && activeStreams.size === 0) {
      DEFAULT_STREAMS.forEach(name => activeStreams.add(name));
    }

    telemetry.update(s => ({
      ...s,
      natsOk: isOk,
      engineRunning: isOk,
      streamsOnline: isOk ? activeStreams.size : 0,
      streamsTotal: isOk ? Math.max(s.streamsTotal, activeStreams.size, DEFAULT_STREAMS.length) : 0
    }));
  } catch {
    telemetry.update(s => ({ ...s, natsOk: false, engineRunning: false }));
  }
}

function connectWs(path: string, onMsg: (d: any) => void, options: { retry?: boolean } = {}) {
  if (destroyed || !activeApiUrl) return;
  const shouldRetry = options.retry ?? true;
  const url = `${wsBase(activeApiUrl)}${path}`;
  console.log(`[Telemetry] Connecting WS to: ${path}`);
  const ws = new WebSocket(url);
  openSockets.push(ws);

  ws.onopen = () => {
    console.log(`[Telemetry] WS connected: ${path}`);
  };

  ws.onmessage = (e) => {
    try {
      const parsed = JSON.parse(e.data);
      onMsg(parsed);
    } catch (err) {
      console.error(`[Telemetry] JSON parse error on ${path}:`, err);
    }
  };

  ws.onerror = (err) => {
    console.error(`[Telemetry] WS error on ${path}:`, err);
  };

  ws.onclose = () => {
    console.log(`[Telemetry] WS closed: ${path}`);
    openSockets = openSockets.filter((s) => s !== ws);
    if (!destroyed && shouldRetry) {
      const t = setTimeout(() => connectWs(path, onMsg), 4000);
      reconnectTimers.push(t);
    }
  };
}

export async function startTelemetry() {
  if (isStarted) return;
  isStarted = true;
  destroyed = false;
  aggressionLiveSeen = false;
  activeStreams.clear();

  const url = await resolveApiUrl();
  if (!url || destroyed) {
    isStarted = false;
    return;
  }
  activeApiUrl = url;
  apiUrl.set(url);
  telemetry.update(s => ({ ...s, enabled: true }));

  // 1. Connection/System status
  connectWs("/ws/status", (raw) => {
    const ev = raw as { stream: string; status: string; exchange: string };
    if (!ev.stream) return;
    
    if (ev.status === "connected") {
      activeStreams.add(ev.stream);
    } else if (ev.status === "disconnected" || ev.status === "reconnecting") {
      activeStreams.delete(ev.stream);
    }

    telemetry.update(s => {
      const total = Math.max(s.streamsTotal, activeStreams.size, DEFAULT_STREAMS.length);
      return {
        ...s,
        streamsOnline: activeStreams.size,
        streamsTotal: total
      };
    });
  });

  // 2. BTC perpetual ticker
  connectWs("/ws/market_status", (raw) => {
    const ev = raw as { symbol: string; mark: number; oi: number; funding: number; next_funding: number };
    if (ev.symbol === "BTCUSDT") {
      telemetry.update(s => ({
        ...s,
        btcPrice: ev.mark ?? 0,
        btcOI: ev.oi ?? 0,
        btcFunding: ev.funding ?? 0,
        btcNextFunding: ev.next_funding ?? 0,
        btcUpdatedAt: Date.now()
      }));
    }
  });

  // 3. BTC Liquidations feed
  connectWs("/ws/liquidations", (raw) => {
    const ev = raw as Liquidation;
    if (ev.symbol?.startsWith("BTC")) {
      // Filter: only show liquidations >= $1,000,000 (1 Million USD)
      if (ev.usd_value < 1_000_000) return;

      telemetry.update(s => {
        const recent = [ev, ...s.recentLiqs].slice(0, 6);
        
        // Define a "Whale Liquidation" threshold (e.g. $10,000 USD)
        const isWhale = ev.usd_value >= 10000;
        
        return {
          ...s,
          recentLiqs: recent,
          latestWhaleLiq: isWhale ? ev : s.latestWhaleLiq,
          rawLiquidation: ev
        };
      });
    }
  });

  // Pre-seed recent liquidations from 24h history
  fetch(`${activeApiUrl}/api/liquidations/BTCUSDT?hours=24`)
    .then((r) => r.json())
    .then((data) => {
      if (Array.isArray(data)) {
        // Filter those >= $1,000,000 and sort by timestamp descending
        const filtered = (data as Liquidation[])
          .filter((liq) => liq.usd_value >= 1_000_000)
          .sort((a, b) => b.ts - a.ts)
          .slice(0, 6);

        telemetry.update((s) => ({
          ...s,
          recentLiqs: filtered,
        }));
      }
    })
    .catch((err) => console.error("[Telemetry] Failed to pre-seed liquidations:", err));

  // 4. BTC Aggression Flow WebSocket
  connectWs("/ws/aggression?symbol=BTCUSDT", (raw) => {
    aggressionLiveSeen = true;
    const ev = raw as AggressionSnapshot;
    if (ev.symbol === "BTCUSDT") {
      telemetry.update(s => ({
        ...s,
        btcAggression: ev
      }));
    }
  });

  fetchHealth();
  healthTimer = setInterval(fetchHealth, 30_000);

  fallbackTimer = setTimeout(async () => {
    if (aggressionLiveSeen || destroyed) return;

    try {
      const response = await fetch(`${activeApiUrl}/api/liquidations/BTCUSDT?hours=24`);
      const data = await response.json();

      if (!aggressionLiveSeen && Array.isArray(data)) {
        const snapshot = buildAggressionSnapshot(data as Liquidation[]);
        if (snapshot) {
          telemetry.update((state) => {
            if (state.btcAggression && state.btcAggression.sources[0] !== "liquidations-history") {
              return state;
            }

            return {
              ...state,
              btcAggression: snapshot,
            };
          });
        }
      }
    } catch (error) {
      console.error("[Telemetry] Failed to build aggression fallback:", error);
    }
  }, 1500);
}

export function stopTelemetry() {
  destroyed = true;
  isStarted = false;
  aggressionLiveSeen = false;
  activeStreams.clear();
  openSockets.forEach((ws) => ws.close());
  openSockets = [];
  reconnectTimers.forEach(clearTimeout);
  reconnectTimers = [];
  clearInterval(healthTimer);
  clearTimeout(fallbackTimer);
}
