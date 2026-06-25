<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  // ── Config ─────────────────────────────────────────────────────────────────
  let apiUrl = "";
  let apiToken = "";
  let isConfiguring = true;
  let inputUrl = "";
  let inputToken = "";

  // ── Health ─────────────────────────────────────────────────────────────────
  let health: { status: string } | null = null;

  // ── Collector streams ──────────────────────────────────────────────────────
  type CollectorStatus = { stream: string; status: string; exchange: string; ts: number };
  let collectorStatuses: Record<string, CollectorStatus> = {};

  // ── Confluence ─────────────────────────────────────────────────────────────
  type ConfluenceRow = { symbol: string; timeframes: Record<string, string> };
  let confluence: ConfluenceRow[] = [];

  // ── Strategy FSM ───────────────────────────────────────────────────────────
  type StrategyState = { ts: number; symbol: string; tf: string; strategy: string; to_state: string; trigger: string; price: number };
  let strategyStates: Record<string, StrategyState> = {};

  // ── Market status ──────────────────────────────────────────────────────────
  type TickerData = { symbol: string; mark: number; oi: number; funding: number; next_funding: number; ts: number };
  let marketStatus: Record<string, TickerData> = {};

  // ── Liquidations ───────────────────────────────────────────────────────────
  type LiqEvent = { symbol: string; side: string; price: number; usd_value: number; ts: number };
  let liquidations: LiqEvent[] = [];

  // ── Connection management ──────────────────────────────────────────────────
  let openSockets: WebSocket[] = [];
  let reconnectTimers: ReturnType<typeof setTimeout>[] = [];
  let pollTimers: ReturnType<typeof setInterval>[] = [];
  let destroyed = false;

  const TFS = ["1w", "1d", "4h", "1h", "15m", "5m", "1m"];
  const MAX_LIQS = 40;

  function wsBase(url: string): string {
    return url.replace(/^https/, "wss").replace(/^http/, "ws");
  }

  function authHeaders(): HeadersInit {
    return apiToken ? { Authorization: `Bearer ${apiToken}` } : {};
  }

  // ── REST polling ───────────────────────────────────────────────────────────
  async function fetchHealth() {
    try {
      const r = await fetch(`${apiUrl}/api/health`, { headers: authHeaders() });
      health = await r.json();
    } catch {
      health = null;
    }
  }

  async function fetchConfluence() {
    try {
      const r = await fetch(`${apiUrl}/api/confluence`, { headers: authHeaders() });
      const data = await r.json();
      if (Array.isArray(data)) confluence = data;
    } catch {}
  }

  async function fetchStrategy() {
    try {
      const r = await fetch(`${apiUrl}/api/strategy/state`, { headers: authHeaders() });
      const data = await r.json();
      if (data && typeof data === "object") strategyStates = data;
    } catch {}
  }

  // ── WebSocket ──────────────────────────────────────────────────────────────
  function connectWs(path: string, onMsg: (data: unknown) => void) {
    if (destroyed) return;
    const q = apiToken ? `?token=${encodeURIComponent(apiToken)}` : "";
    const ws = new WebSocket(`${wsBase(apiUrl)}${path}${q}`);
    openSockets.push(ws);
    ws.onmessage = (e) => {
      try { onMsg(JSON.parse(e.data)); } catch {}
    };
    ws.onclose = () => {
      openSockets = openSockets.filter((s) => s !== ws);
      if (!destroyed) {
        const t = setTimeout(() => connectWs(path, onMsg), 4000);
        reconnectTimers.push(t);
      }
    };
  }

  function startConnections() {
    connectWs("/ws/status", (raw) => {
      const ev = raw as CollectorStatus;
      if (ev.stream) {
        collectorStatuses = { ...collectorStatuses, [ev.stream]: { ...ev, ts: Date.now() } };
      }
    });

    connectWs("/ws/market_status", (raw) => {
      const ev = raw as TickerData;
      if (ev.symbol) marketStatus = { ...marketStatus, [ev.symbol]: ev };
    });

    connectWs("/ws/liquidations", (raw) => {
      const ev = raw as LiqEvent;
      if (ev.symbol) liquidations = [ev, ...liquidations].slice(0, MAX_LIQS);
    });

    pollTimers.push(setInterval(fetchHealth, 30_000));
    pollTimers.push(setInterval(fetchConfluence, 60_000));
    pollTimers.push(setInterval(fetchStrategy, 30_000));

    fetchHealth();
    fetchConfluence();
    fetchStrategy();
  }

  function stopConnections() {
    destroyed = true;
    openSockets.forEach((ws) => ws.close());
    openSockets = [];
    reconnectTimers.forEach(clearTimeout);
    reconnectTimers = [];
    pollTimers.forEach(clearInterval);
    pollTimers = [];
  }

  // ── Config actions ─────────────────────────────────────────────────────────
  function saveConfig() {
    const url = inputUrl.trim().replace(/\/$/, "");
    if (!url) return;
    localStorage.setItem("ARK_API_URL", url);
    localStorage.setItem("ARK_API_TOKEN", inputToken.trim());
    apiUrl = url;
    apiToken = inputToken.trim();
    isConfiguring = false;
    startConnections();
  }

  function disconnect() {
    stopConnections();
    localStorage.removeItem("ARK_API_URL");
    localStorage.removeItem("ARK_API_TOKEN");
    health = null;
    confluence = [];
    strategyStates = {};
    marketStatus = {};
    liquidations = [];
    collectorStatuses = {};
    destroyed = false;
    isConfiguring = true;
  }

  onMount(() => {
    const savedUrl = localStorage.getItem("ARK_API_URL");
    const savedToken = localStorage.getItem("ARK_API_TOKEN") ?? "";
    if (savedUrl) {
      apiUrl = savedUrl;
      apiToken = savedToken;
      inputUrl = savedUrl;
      inputToken = savedToken;
      isConfiguring = false;
      startConnections();
    }
  });

  onDestroy(stopConnections);

  // ── Display helpers ────────────────────────────────────────────────────────
  function trendColor(t: string): string {
    if (t === "BULLISH") return "text-emerald-400";
    if (t === "BEARISH") return "text-rose-400";
    return "text-white/20";
  }

  function trendGlyph(t: string): string {
    if (t === "BULLISH") return "▲";
    if (t === "BEARISH") return "▼";
    return "·";
  }

  function streamDotColor(s: string): string {
    if (s === "connected") return "bg-emerald-400 animate-pulse";
    if (s === "disconnected") return "bg-rose-400";
    return "bg-amber-400 animate-pulse";
  }

  function fmtUSD(v: number): string {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
    return `$${v.toFixed(0)}`;
  }

  function fmtFunding(r: number): string {
    return `${(r * 100).toFixed(4)}%`;
  }

  function fmtPrice(p: number): string {
    if (p >= 1000) return p.toLocaleString("en-US", { maximumFractionDigits: 2 });
    if (p >= 1) return p.toFixed(4);
    return p.toFixed(6);
  }

  function timeAgo(ms: number): string {
    const s = Math.floor((Date.now() - ms) / 1000);
    if (s < 60) return `${s}s`;
    return `${Math.floor(s / 60)}m`;
  }

  $: sortedStreams = Object.values(collectorStatuses).sort((a, b) =>
    a.stream.localeCompare(b.stream)
  );

  $: sortedTickers = Object.values(marketStatus).sort((a, b) =>
    a.symbol.localeCompare(b.symbol)
  );

  $: sortedStrategies = Object.entries(strategyStates).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  $: hasData =
    sortedStreams.length > 0 ||
    confluence.length > 0 ||
    sortedTickers.length > 0 ||
    liquidations.length > 0;
</script>

<section id="metrics" class="py-24 px-4 bg-transparent">
  <div class="max-w-6xl mx-auto w-full relative z-10">

    {#if isConfiguring}
      <!-- ── Config form ────────────────────────────────────────────────────── -->
      <div class="border border-white/20 p-6 md:p-8 bg-black/95 backdrop-blur-md shadow-2xl rounded-sm max-w-2xl mx-auto">
        <h4 class="font-mono text-accent text-sm mb-4 tracking-widest text-center border-b border-white/10 pb-3">
          :: CONECTAR ARK STREAMS ::
        </h4>

        <form on:submit|preventDefault={saveConfig} class="space-y-4 font-mono">
          <div>
            <label for="ark-url" class="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
              API URL
            </label>
            <input
              id="ark-url"
              type="url"
              bind:value={inputUrl}
              placeholder="https://api.nexusquant.com"
              required
              class="w-full bg-black/90 border border-white/20 text-accent font-mono p-3 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-300 text-xs"
            />
          </div>
          <div>
            <label for="ark-token" class="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
              ARK_API_KEY
            </label>
            <input
              id="ark-token"
              type="password"
              bind:value={inputToken}
              placeholder="Bearer token"
              class="w-full bg-black/90 border border-white/20 text-white/60 font-mono p-3 focus:outline-none focus:border-accent transition-all duration-300 text-xs"
            />
          </div>
          <button
            type="submit"
            class="group relative w-full px-6 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            <div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-xs text-white group-hover:text-accent tracking-wider font-bold">
              [ CONECTAR ]
            </span>
          </button>
        </form>
      </div>

    {:else}
      <!-- ── Dashboard ──────────────────────────────────────────────────────── -->
      <div class="flex items-center justify-between mb-8 flex-wrap gap-3">
        <div class="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          :: ARK STREAMS · LIVE TELEMETRY ::
        </div>
        <div class="flex items-center gap-4">
          {#if health}
            <div class="flex items-center gap-1.5">
              <div class="w-1.5 h-1.5 rounded-full {health.status === 'ok' ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}"></div>
              <span class="font-mono text-[10px] {health.status === 'ok' ? 'text-emerald-400' : 'text-rose-400'} tracking-widest">
                NATS {health.status?.toUpperCase()}
              </span>
            </div>
          {/if}
          <button
            on:click={() => (isConfiguring = true)}
            class="font-mono text-[10px] text-white/20 hover:text-white/50 transition-colors"
          >
            [ EDITAR ]
          </button>
          <button
            on:click={disconnect}
            class="font-mono text-[10px] text-white/20 hover:text-rose-400/50 transition-colors"
          >
            [ DESCONECTAR ]
          </button>
        </div>
      </div>

      <div class="space-y-4">

        <!-- 1. Collector Streams -->
        {#if sortedStreams.length > 0}
          <div class="border border-white/10 bg-black/60 p-4 rounded-sm">
            <div class="text-[10px] text-white/30 tracking-widest uppercase mb-3">COLETORES</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-3">
              {#each sortedStreams as c}
                <div class="flex items-center gap-2 min-w-0">
                  <div class="w-1.5 h-1.5 rounded-full flex-shrink-0 {streamDotColor(c.status)}"></div>
                  <span class="font-mono text-[10px] text-white/50 truncate" title="{c.stream} ({c.exchange})">
                    {c.stream}
                  </span>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- 2. Market Status (OI + Funding) -->
        {#if sortedTickers.length > 0}
          <div class="border border-white/10 bg-black/60 p-4 rounded-sm">
            <div class="text-[10px] text-white/30 tracking-widest uppercase mb-3">MARKET STATUS</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {#each sortedTickers as tick}
                <div class="border border-white/5 bg-black/40 p-3 rounded-sm font-mono">
                  <div class="flex justify-between items-baseline mb-2">
                    <span class="text-xs text-white font-bold">{tick.symbol}</span>
                    <span class="text-xs text-accent">${fmtPrice(tick.mark ?? 0)}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-3 text-[10px]">
                    <div>
                      <span class="text-white/30 uppercase tracking-wider">OI </span>
                      <span class="text-white/60">{(tick.oi ?? 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div>
                      <span class="text-white/30 uppercase tracking-wider">Funding </span>
                      <span class="{(tick.funding ?? 0) > 0 ? 'text-rose-400' : 'text-emerald-400'}">
                        {fmtFunding(tick.funding ?? 0)}
                      </span>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- 3. Confluence Grid -->
        {#if confluence.length > 0}
          <div class="border border-white/10 bg-black/60 p-4 rounded-sm overflow-x-auto">
            <div class="text-[10px] text-white/30 tracking-widest uppercase mb-3">
              CONFLUÊNCIA · ALLIGATOR TREND
            </div>
            <table class="w-full font-mono min-w-[480px]">
              <thead>
                <tr>
                  <th class="text-left text-[10px] text-white/20 tracking-widest pb-2 pr-4">SYMBOL</th>
                  {#each TFS as tf}
                    <th class="text-center text-[10px] text-white/20 tracking-widest pb-2 px-2 w-12">{tf}</th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each confluence as row}
                  <tr class="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td class="py-2 pr-4 text-xs text-white/60 font-bold">{row.symbol}</td>
                    {#each TFS as tf}
                      {@const trend = row.timeframes[tf]}
                      <td class="text-center py-2 px-2 text-xs font-bold {trendColor(trend ?? '')}">
                        {trend ? trendGlyph(trend) : "—"}
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
            <div class="flex gap-5 mt-3 font-mono text-[10px] text-white/30">
              <span><span class="text-emerald-400">▲</span> BULLISH</span>
              <span><span class="text-rose-400">▼</span> BEARISH</span>
              <span><span class="text-white/20">·</span> SLEEPING</span>
            </div>
          </div>
        {/if}

        <!-- 4. Strategy FSM States -->
        {#if sortedStrategies.length > 0}
          <div class="border border-white/10 bg-black/60 p-4 rounded-sm">
            <div class="text-[10px] text-white/30 tracking-widest uppercase mb-3">STRATEGY FSM</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {#each sortedStrategies as [, ev]}
                <div class="border border-white/5 bg-black/40 p-3 rounded-sm font-mono">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-[10px] text-white/40">{ev.symbol}/{ev.tf}</span>
                    <span class="text-[10px] text-accent font-bold tracking-wider">{ev.to_state}</span>
                  </div>
                  <div class="text-[10px] text-white/30">
                    {ev.trigger ?? "—"}
                    {#if ev.price}
                      <span class="text-white/20"> · ${fmtPrice(ev.price)}</span>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- 5. Live Liquidation Feed -->
        {#if liquidations.length > 0}
          <div class="border border-white/10 bg-black/60 p-4 rounded-sm">
            <div class="text-[10px] text-white/30 tracking-widest uppercase mb-3">
              LIQUIDAÇÕES · LIVE
            </div>
            <div class="space-y-0.5 max-h-56 overflow-y-auto">
              {#each liquidations as liq}
                <div class="flex items-center gap-3 font-mono text-[10px] py-1 border-b border-white/[0.04]">
                  <span class="w-3 flex-shrink-0 {liq.side === 'buy' || liq.side === 'BUY' ? 'text-rose-400' : 'text-emerald-400'}">
                    {liq.side === "buy" || liq.side === "BUY" ? "▼" : "▲"}
                  </span>
                  <span class="text-white/50 w-20 flex-shrink-0">{liq.symbol}</span>
                  <span class="text-white font-bold">{fmtUSD(liq.usd_value ?? 0)}</span>
                  <span class="text-white/30">@ ${fmtPrice(liq.price ?? 0)}</span>
                  <span class="text-white/20 ml-auto flex-shrink-0">{timeAgo(liq.ts)}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Loading state -->
        {#if !hasData}
          <div class="flex flex-col items-center justify-center py-20 gap-4">
            <div class="flex gap-1">
              {#each Array(3) as _, i}
                <div
                  class="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse"
                  style="animation-delay: {i * 200}ms"
                ></div>
              {/each}
            </div>
            <span class="font-mono text-[10px] text-white/20 tracking-widest">
              CONECTANDO AOS STREAMS...
            </span>
          </div>
        {/if}

      </div>
    {/if}
  </div>
</section>
