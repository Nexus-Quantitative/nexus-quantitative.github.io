<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const API_URL: string = import.meta.env.VITE_ARK_API_URL ?? "";
  const API_KEY: string = import.meta.env.VITE_ARK_API_KEY ?? "";
  const enabled = !!API_URL;

  // ── BTC ticker ─────────────────────────────────────────────────────────────
  let btcPrice = 0;
  let btcOI = 0;
  let btcFunding = 0;
  let btcNextFunding = 0;
  let btcUpdatedAt = 0;

  // ── System health ──────────────────────────────────────────────────────────
  let natsOk: boolean | null = null;
  let streamsOnline = 0;
  let streamsTotal = 0;

  // ── Recent BTC liquidations ────────────────────────────────────────────────
  type Liq = { side: string; usd_value: number; price: number; ts: number };
  let recentLiqs: Liq[] = [];

  // ── Connection internals ───────────────────────────────────────────────────
  let openSockets: WebSocket[] = [];
  let reconnectTimers: ReturnType<typeof setTimeout>[] = [];
  let healthTimer: ReturnType<typeof setInterval>;
  let destroyed = false;

  function wsBase(url: string) {
    return url.replace(/^https/, "wss").replace(/^http/, "ws");
  }

  async function fetchHealth() {
    try {
      const r = await fetch(`${API_URL}/api/health`, {
        headers: API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {},
      });
      const d = await r.json();
      natsOk = d.status === "ok";
    } catch {
      natsOk = false;
    }
  }

  function connectWs(path: string, onMsg: (d: unknown) => void) {
    if (destroyed || !API_URL) return;
    const q = API_KEY ? `?token=${encodeURIComponent(API_KEY)}` : "";
    const ws = new WebSocket(`${wsBase(API_URL)}${path}${q}`);
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

  onMount(() => {
    if (!enabled) return;

    connectWs("/ws/market_status", (raw) => {
      const ev = raw as { symbol: string; mark: number; oi: number; funding: number; next_funding: number };
      if (ev.symbol === "BTCUSDT") {
        btcPrice = ev.mark ?? 0;
        btcOI = ev.oi ?? 0;
        btcFunding = ev.funding ?? 0;
        btcNextFunding = ev.next_funding ?? 0;
        btcUpdatedAt = Date.now();
      }
    });

    connectWs("/ws/status", (raw) => {
      const ev = raw as { status: string };
      streamsTotal = Math.max(streamsTotal, streamsOnline + 1);
      if (ev.status === "connected") streamsOnline++;
      else if (ev.status === "disconnected") streamsOnline = Math.max(0, streamsOnline - 1);
    });

    connectWs("/ws/liquidations", (raw) => {
      const ev = raw as Liq & { symbol: string };
      if (ev.symbol?.startsWith("BTC")) {
        recentLiqs = [ev, ...recentLiqs].slice(0, 6);
      }
    });

    fetchHealth();
    healthTimer = setInterval(fetchHealth, 30_000);
  });

  onDestroy(() => {
    destroyed = true;
    openSockets.forEach((ws) => ws.close());
    reconnectTimers.forEach(clearTimeout);
    clearInterval(healthTimer);
  });

  // ── Formatters ─────────────────────────────────────────────────────────────
  function fmtPrice(p: number): string {
    return p.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function fmtFunding(r: number): string {
    const pct = r * 100;
    return `${pct >= 0 ? "+" : ""}${pct.toFixed(4)}%`;
  }

  function fmtOI(v: number): string {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(2)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
    return v.toFixed(0);
  }

  function fmtUSD(v: number): string {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
    return `$${v.toFixed(0)}`;
  }

  function fmtNextFunding(ms: number): string {
    if (!ms) return "—";
    const diff = ms - Date.now();
    if (diff <= 0) return "now";
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  }

  $: fundingPositive = btcFunding > 0;
  $: fresh = btcUpdatedAt > 0 && Date.now() - btcUpdatedAt < 60_000;
</script>

{#if enabled}
<section id="metrics" class="py-24 px-4 bg-transparent">
  <div class="max-w-4xl mx-auto w-full relative z-10">

    <!-- Section label -->
    <div class="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
      <span>:: LIVE TELEMETRY</span>
      <div class="flex-1 h-px bg-white/5"></div>
      <div class="flex items-center gap-1.5">
        <div class="w-1 h-1 rounded-full {natsOk === true ? 'bg-emerald-400 animate-pulse' : natsOk === false ? 'bg-rose-400' : 'bg-white/20'}"></div>
        <span class="{natsOk === true ? 'text-emerald-400/60' : natsOk === false ? 'text-rose-400/60' : 'text-white/20'}">
          {natsOk === true ? "CONNECTED" : natsOk === false ? "OFFLINE" : "…"}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

      <!-- BTC Price -->
      <div class="md:col-span-2 border border-accent/20 bg-black/80 p-5 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.06)]">
        <div class="flex items-start justify-between mb-4">
          <div>
            <div class="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-1">BTC / USDT · PERPETUAL</div>
            {#if btcPrice > 0}
              <div class="font-mono font-bold text-white tracking-tight" style="font-size: clamp(1.8rem, 4vw, 2.6rem)">
                ${fmtPrice(btcPrice)}
              </div>
            {:else}
              <div class="font-mono text-white/10 text-4xl">——————</div>
            {/if}
          </div>
          <div class="flex items-center gap-1.5 pt-1">
            <div class="w-1.5 h-1.5 rounded-full {fresh ? 'bg-accent animate-pulse' : 'bg-white/10'}"></div>
            <span class="font-mono text-[9px] text-white/20 tracking-widest">LIVE</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
          <div>
            <div class="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-1">Open Interest</div>
            <div class="font-mono text-xs text-white/70">{btcOI > 0 ? fmtOI(btcOI) : "—"}</div>
          </div>
          <div>
            <div class="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-1">Funding Rate</div>
            <div class="font-mono text-xs {btcFunding !== 0 ? (fundingPositive ? 'text-rose-400' : 'text-emerald-400') : 'text-white/40'}">
              {btcFunding !== 0 ? fmtFunding(btcFunding) : "—"}
            </div>
          </div>
          <div>
            <div class="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-1">Next Funding</div>
            <div class="font-mono text-xs text-white/50">{fmtNextFunding(btcNextFunding)}</div>
          </div>
        </div>
      </div>

      <!-- System Status -->
      <div class="border border-white/10 bg-black/60 p-5 rounded-sm flex flex-col gap-4">
        <div class="font-mono text-[10px] text-white/30 tracking-widest uppercase">SYSTEM</div>

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] text-white/40">NATS</span>
            <span class="font-mono text-[10px] font-bold {natsOk === true ? 'text-emerald-400' : natsOk === false ? 'text-rose-400' : 'text-white/20'}">
              {natsOk === true ? "OK" : natsOk === false ? "FAIL" : "—"}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] text-white/40">STREAMS</span>
            <span class="font-mono text-[10px] text-white/60">
              {streamsOnline > 0 ? streamsOnline : "—"}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] text-white/40">ENGINE</span>
            <span class="font-mono text-[10px] {natsOk === true ? 'text-emerald-400' : 'text-white/20'}">
              {natsOk === true ? "RUNNING" : "—"}
            </span>
          </div>
        </div>

        <!-- Subtle data freshness bar -->
        {#if btcUpdatedAt > 0}
          <div class="mt-auto border-t border-white/5 pt-3">
            <div class="font-mono text-[9px] text-white/15 tracking-wider">
              ark-streams · bitget
            </div>
          </div>
        {/if}
      </div>

    </div>

    <!-- BTC Liquidations feed -->
    {#if recentLiqs.length > 0}
      <div class="mt-3 border border-white/5 bg-black/40 rounded-sm px-4 py-3">
        <div class="font-mono text-[9px] text-white/20 tracking-widest uppercase mb-2">BTC LIQUIDAÇÕES RECENTES</div>
        <div class="flex flex-wrap gap-x-4 gap-y-1">
          {#each recentLiqs as liq}
            <span class="font-mono text-[10px] {liq.side === 'buy' || liq.side === 'BUY' ? 'text-rose-400/70' : 'text-emerald-400/70'}">
              {liq.side === "buy" || liq.side === "BUY" ? "▼" : "▲"} {fmtUSD(liq.usd_value)}
            </span>
          {/each}
        </div>
      </div>
    {/if}

  </div>
</section>
{/if}
