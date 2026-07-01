<script lang="ts">
  import { t } from "svelte-i18n";
  import { telemetry } from "./telemetry";

  export let showLink = false;
  export let compact = false;

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

  $: fundingPositive = $telemetry.btcFunding > 0;
  $: fresh = $telemetry.btcUpdatedAt > 0 && Date.now() - $telemetry.btcUpdatedAt < 60_000;
</script>

{#if $telemetry.enabled}
<section id="metrics" class="{compact ? 'py-8 md:py-12' : 'py-24'} px-4 bg-transparent">
  <div class="max-w-4xl mx-auto w-full relative z-10">

    <!-- Section label -->
    <div class="font-mono text-base md:text-lg text-white/70 tracking-[0.2em] uppercase mb-8 flex items-center gap-3 flex-wrap">
      <span class="font-bold">:: LIVE TELEMETRY</span>
      <span class="px-2 py-1 rounded-sm border border-accent/20 bg-accent/5 text-xs tracking-[0.15em] text-accent/90 font-bold">
        SOURCE: BITGET TICKER WS & NATS
      </span>
      <div class="hidden sm:block flex-1 h-px bg-white/10"></div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full {$telemetry.natsOk === true ? 'bg-[#00FF94] animate-pulse' : $telemetry.natsOk === false ? 'bg-rose-400' : 'bg-white/30'}"></div>
        <span class="text-sm {$telemetry.natsOk === true ? 'text-[#00FF94]' : $telemetry.natsOk === false ? 'text-rose-400' : 'text-white/45'}">
          {$telemetry.natsOk === true ? "CONNECTED" : $telemetry.natsOk === false ? "OFFLINE" : "…"}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

      <!-- BTC Price -->
      <div class="md:col-span-2 border border-accent/30 bg-black/50 backdrop-blur-md p-6 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.08)]">
        <div class="flex items-start justify-between mb-5">
          <div>
            <div class="font-mono text-sm md:text-base text-white/60 tracking-widest uppercase font-semibold mb-2">BTC / USDT · PERPETUAL</div>
            {#if $telemetry.btcPrice > 0}
              <div class="font-mono font-bold text-white tracking-tight" style="font-size: clamp(2rem, 5vw, 3rem)">
                ${fmtPrice($telemetry.btcPrice)}
              </div>
            {:else}
              <div class="font-mono text-white/20 text-4xl">——————</div>
            {/if}
          </div>
          <div class="flex items-center gap-2 pt-1">
            <div class="w-2 h-2 rounded-full {fresh ? 'bg-accent animate-pulse' : 'bg-white/20'}"></div>
            <span class="font-mono text-sm text-white/60 tracking-widest">LIVE</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-5">
          <div>
            <div class="font-mono text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-wider mb-2">Open Interest</div>
            <div class="font-mono text-sm sm:text-lg font-semibold text-white/90">{$telemetry.btcOI > 0 ? fmtOI($telemetry.btcOI) : "—"}</div>
          </div>
          <div>
            <div class="font-mono text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-wider mb-2">Funding Rate</div>
            <div class="font-mono text-sm sm:text-lg font-semibold {$telemetry.btcFunding !== 0 ? (fundingPositive ? 'text-rose-400' : 'text-emerald-400') : 'text-white/50'}">
              {$telemetry.btcFunding !== 0 ? fmtFunding($telemetry.btcFunding) : "—"}
            </div>
          </div>
          <div>
            <div class="font-mono text-[10px] sm:text-xs md:text-sm text-white/50 uppercase tracking-wider mb-2">Next Funding</div>
            <div class="font-mono text-sm sm:text-lg font-semibold text-white/70">{fmtNextFunding($telemetry.btcNextFunding)}</div>
          </div>
        </div>
      </div>

      <!-- System Status -->
      <div class="border border-white/15 bg-black/40 backdrop-blur-md p-6 rounded-sm flex flex-col gap-5">
        <div class="font-mono text-sm md:text-base text-white/60 tracking-widest uppercase font-semibold">SYSTEM</div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="font-mono text-base text-white/60">NATS</span>
            <span class="font-mono text-base font-bold {$telemetry.natsOk === true ? 'text-emerald-400' : $telemetry.natsOk === false ? 'text-rose-400' : 'text-white/40'}">
              {$telemetry.natsOk === true ? "OK" : $telemetry.natsOk === false ? "FAIL" : "—"}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-mono text-base text-white/60">STREAMS</span>
            <span class="font-mono text-base font-semibold text-white/80">
              {$telemetry.streamsOnline > 0 ? `${$telemetry.streamsOnline}/${$telemetry.streamsTotal}` : "—"}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="font-mono text-base text-white/60">ENGINE</span>
            <span class="font-mono text-base font-bold {$telemetry.engineRunning ? 'text-emerald-400' : 'text-white/40'}">
              {$telemetry.engineRunning ? "RUNNING" : "—"}
            </span>
          </div>
        </div>

        {#if $telemetry.btcUpdatedAt > 0}
          <div class="mt-auto border-t border-white/10 pt-4">
            <div class="font-mono text-sm text-white/35 tracking-wider">
              ark-streams · bitget
            </div>
          </div>
        {/if}
      </div>

    </div>

    <!-- BTC Liquidations feed -->
    {#if $telemetry.recentLiqs.length > 0}
      <div class="mt-3 border border-white/10 bg-black/30 backdrop-blur-md rounded-sm px-5 py-4">
        <div class="font-mono text-sm md:text-base text-white/60 tracking-widest uppercase font-semibold mb-3">BTC LIQUIDAÇÕES RECENTES (>= $1M)</div>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          {#each $telemetry.recentLiqs as liq}
            <span class="font-mono text-base font-semibold {liq.side === 'buy' || liq.side === 'BUY' ? 'text-rose-400' : 'text-emerald-400'}">
              {liq.side === "buy" || liq.side === "BUY" ? "▼" : "▲"} {fmtUSD(liq.usd_value)}
              <span class="text-white/30 text-sm font-normal ml-1">
                ({liq.exchange?.toUpperCase() ?? 'OKX'} @ {new Date(liq.ts).toLocaleTimeString()})
              </span>
            </span>
          {/each}
        </div>
      </div>
    {/if}

    {#if showLink}
      <div class="mt-8 flex justify-center">
        <a
          href="#/terminal"
          class="group relative px-8 py-3 bg-transparent overflow-hidden border border-accent hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto text-center"
        >
          <div
            class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"
          ></div>
          <span
            class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-widest font-bold"
          >
            {$t("metrics.enter_terminal")}
          </span>
        </a>
      </div>
    {/if}

  </div>
</section>
{/if}
