<script lang="ts">
  import { telemetry } from "./telemetry";

  let activeWindow = $state("1h"); // Default window using state rune

  // Formatting helper
  function fmtUSD(v: number): string {
    const abs = Math.abs(v);
    if (abs >= 1_000_000_000_000) return `$${(abs / 1_000_000_000_000).toFixed(2)}T`;
    if (abs >= 1_000_000_000) return `$${(abs / 1_000_000_000).toFixed(2)}B`;
    if (abs >= 1_000_000) return `$${(abs / 1_000_000).toFixed(2)}M`;
    if (abs >= 1_000) return `$${(abs / 1_000).toFixed(0)}K`;
    return `$${abs.toFixed(0)}`;
  }

  // Derive metrics from the store using runes
  let snap = $derived($telemetry.btcAggression);
  let windowData = $derived(snap?.windows?.find(w => w.label.toLowerCase() === activeWindow.toLowerCase()) ?? null);

  $effect(() => {
    console.log("[Speedometer Debug] snap:", snap);
    console.log("[Speedometer Debug] windowData:", windowData);
  });

  let buyUSD = $derived(windowData ? windowData.buy_usd : 0);
  let sellUSD = $derived(windowData ? windowData.sell_usd : 0);
  let delta = $derived(windowData ? windowData.delta : 0);
  let ratio = $derived(windowData ? windowData.ratio : 1.0);

  // Calculate buyer percentage: 0 = 100% sellers, 0.5 = 50/50 neutral, 1 = 100% buyers
  let buyPercentage = $derived((buyUSD + sellUSD) > 0 ? buyUSD / (buyUSD + sellUSD) : 0.5);

  // Needle angle: -90 degrees (far left / panic) to +90 degrees (far right / euphoria)
  let needleAngle = $derived(buyPercentage * 180 - 90);

  let activeWindowLabel = $derived(activeWindow.toUpperCase());

  // Sentiment classification
  let sentiment = $derived((() => {
    if ((buyUSD + sellUSD) === 0) return { text: "STANDBY", color: "text-white/40", glow: "rgba(255,255,255,0.05)" };
    if (buyPercentage < 0.25) return { text: "EXTREME PANIC", color: "text-rose-500", glow: "rgba(244,63,94,0.3)" };
    if (buyPercentage < 0.45) return { text: "SELLING PRESSURE", color: "text-rose-400", glow: "rgba(251,113,133,0.15)" };
    if (buyPercentage <= 0.55) return { text: "NEUTRAL FLOW", color: "text-white/70", glow: "rgba(255,255,255,0.1)" };
    if (buyPercentage <= 0.75) return { text: "BUYING PRESSURE", color: "text-accent/80", glow: "rgba(0,240,255,0.15)" };
    return { text: "EXTREME EUPHORIA", color: "text-accent", glow: "rgba(0,240,255,0.4)" };
  })());

  function setWindow(w: string) {
    activeWindow = w;
  }
</script>

{#if $telemetry.enabled}
<section id="aggression-speedometer" class="py-24 px-4 bg-transparent font-mono select-none">
  <div class="max-w-4xl mx-auto w-full relative z-10">

    <!-- Section label -->
    <div class="font-mono text-base md:text-lg text-white/70 tracking-[0.2em] uppercase mb-8 flex items-center gap-3 flex-wrap">
      <span class="font-bold">:: AGGRESSION SPEEDOMETER</span>
      <span class="px-2 py-1 rounded-sm border border-accent/20 bg-accent/5 text-xs tracking-[0.15em] text-accent/90 font-bold">
        SOURCE: OKX & BYBIT LIVE TRADES
      </span>
      <div class="flex-1 h-px bg-white/10"></div>
      <span class="px-2 py-1 rounded-sm border border-white/10 bg-white/5 text-xs tracking-[0.25em] text-white/70">
        ACTIVE // {activeWindowLabel}
      </span>
      
      <!-- Timeframe selectors -->
      <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-xs md:text-sm">
        {#each ["5m", "1h", "1d"] as tf}
          <button 
            onclick={() => setWindow(tf)} 
            aria-pressed={activeWindow === tf}
            class="px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer border-r border-white/10 last:border-0
              {activeWindow === tf ? 'bg-accent/15 text-accent font-bold shadow-[inset_0_0_0_1px_rgba(0,240,255,0.35)]' : 'text-white/40'}"
          >
            {tf.toUpperCase()} WINDOW
          </button>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-white/10 bg-black/40 backdrop-blur-md p-8 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
      
      <!-- Left side: Digital Readouts -->
      <div class="space-y-4">
        <div class="font-mono text-sm md:text-base text-white/60 tracking-widest uppercase font-semibold">ORDER FLOW STATS</div>
        
        <div class="space-y-3.5">
          <div>
            <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Buy Volume (Aggressive)</div>
            <div class="text-xl md:text-2xl font-bold text-accent font-mono">{fmtUSD(buyUSD)}</div>
          </div>

          <div>
            <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Sell Volume (Aggressive)</div>
            <div class="text-xl md:text-2xl font-bold text-rose-400 font-mono">{fmtUSD(sellUSD)}</div>
          </div>

          <div class="border-t border-white/5 pt-3">
            <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Net Delta</div>
            <div class="text-xl md:text-2xl font-bold font-mono {delta >= 0 ? 'text-accent' : 'text-rose-400'}">
              {delta >= 0 ? "+" : "-"}{fmtUSD(delta)}
            </div>
          </div>
        </div>
      </div>

      <!-- Center: Dial Speedometer -->
      <div class="flex flex-col items-center justify-center py-4 relative">
        <svg viewBox="0 0 200 120" class="w-full max-w-[240px] drop-shadow-[0_0_15px_var(--glow-color)]" style="--glow-color: {sentiment.glow}">
          <defs>
            <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f43f5e" /> <!-- Rose / Selling -->
              <stop offset="50%" stop-color="#4b5563" /> <!-- Gray / Neutral -->
              <stop offset="100%" stop-color="#00f0ff" /> <!-- Cyan / Buying -->
            </linearGradient>
          </defs>

          <!-- Dial Arc -->
          <path 
            d="M 20 100 A 80 80 0 0 1 180 100" 
            fill="none" 
            stroke="url(#dialGradient)" 
            stroke-width="12" 
            stroke-linecap="round"
          />

          <!-- Tick Marks -->
          <line x1="20" y1="100" x2="30" y2="100" stroke="white" stroke-width="2" />
          <line x1="100" y1="20" x2="100" y2="30" stroke="white" stroke-width="2" />
          <line x1="180" y1="100" x2="170" y2="100" stroke="white" stroke-width="2" />

          <!-- Needle -->
          <g transform="translate(100, 100)">
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="-75" 
              stroke="#ffffff" 
              stroke-width="3" 
              stroke-linecap="round"
              style="transform: rotate({needleAngle}deg); transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); transform-origin: 0px 0px"
            />
            <circle cx="0" cy="0" r="8" fill="#ffffff" />
            <circle cx="0" cy="0" r="4" fill="#000000" />
          </g>
        </svg>

        <!-- Current Sentiment Class -->
        <div class="text-center mt-3">
          <span class="text-sm text-white/45 tracking-widest block uppercase mb-1">FLOW SENTIMENT</span>
          <span class="text-lg md:text-xl font-bold tracking-widest uppercase {sentiment.color} animate-pulse-glow">
            {sentiment.text}
          </span>
        </div>
      </div>

      <!-- Right side: Pressure Ratios & Details -->
      <div class="space-y-4 md:pl-6 md:border-l border-white/5">
        <div class="font-mono text-sm md:text-base text-white/60 tracking-widest uppercase font-semibold">AGGRESSOR DETAILS</div>
        
        <div class="space-y-4">
          <div>
            <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Buy / Sell Ratio</div>
            <div class="text-3xl font-bold text-white tracking-tight">{ratio.toFixed(2)}x</div>
          </div>

          <div>
            <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Buy Percentage</div>
            <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5 flex">
              <div class="bg-accent h-full transition-all duration-500" style="width: {buyPercentage * 100}%"></div>
            </div>
            <div class="flex justify-between text-xs text-white/40 mt-1">
              <span>SELL: {((1 - buyPercentage) * 100).toFixed(0)}%</span>
              <span>BUY: {(buyPercentage * 100).toFixed(0)}%</span>
            </div>
          </div>

          {#if snap?.sources}
            <div class="pt-2">
              <div class="text-xs md:text-sm text-white/40 uppercase mb-1">Active Sources</div>
              <div class="flex gap-1.5 flex-wrap">
                {#each snap.sources as src}
                  <span class="text-[10px] md:text-xs border border-white/10 bg-white/5 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/60">
                    {src}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </div>

    </div>

    <!-- Explanatory note -->
    <div class="mt-4 flex items-center justify-between text-xs text-white/45 font-mono">
      <span>* Speedometer updates live every 500ms using consolidated OKX & Bybit trades.</span>
      {#if snap?.updated_at}
        <span>Last update: {new Date(snap.updated_at).toLocaleTimeString()}</span>
      {/if}
    </div>

  </div>
</section>
{/if}
