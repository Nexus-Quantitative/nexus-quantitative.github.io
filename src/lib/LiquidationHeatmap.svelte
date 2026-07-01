<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { telemetry, apiUrl, type Liquidation } from "./telemetry";

  // Configuration
  let binSize = 250; // $250 price bins
  let visibleBinCount = 12; // Number of bins to display around the current price

  interface Bin {
    priceStart: number;
    priceEnd: number;
    buyValue: number;  // Shorts liquidated (forced buys)
    sellValue: number; // Longs liquidated (forced sells)
    totalValue: number;
    isUpdating?: boolean;
  }

  let rawHistLiqs: Liquidation[] = [];
  let bins: Bin[] = [];
  let maxBinValue = 1; // Used for scale calculations
  let isLoading = true;

  // Fetch 24h historical liquidations
  async function fetchHistory() {
    if (!$apiUrl) return;
    try {
      isLoading = true;
      const res = await fetch(`${$apiUrl}/api/liquidations/BTCUSDT?hours=24`);
      const data = await res.json();
      if (Array.isArray(data)) {
        rawHistLiqs = data;
        recalculateBins();
      }
    } catch (e) {
      console.error("Failed to load liquidation history", e);
    } finally {
      isLoading = false;
    }
  }

  // Group liquidations into bins centered around the current BTC price
  function recalculateBins() {
    const currentPrice = $telemetry.btcPrice;
    if (currentPrice === 0) return;

    // Determine the center bin
    const centerBinStart = Math.floor(currentPrice / binSize) * binSize;
    
    // Create an array of empty bins surrounding the current price
    const halfCount = Math.floor(visibleBinCount / 2);
    const newBins: Bin[] = [];
    
    for (let i = -halfCount; i <= halfCount; i++) {
      const start = centerBinStart + i * binSize;
      newBins.push({
        priceStart: start,
        priceEnd: start + binSize,
        buyValue: 0,
        sellValue: 0,
        totalValue: 0,
        isUpdating: false
      });
    }

    // Allocate historical liquidations to these bins
    rawHistLiqs.forEach(liq => {
      const price = liq.price;
      const bin = newBins.find(b => price >= b.priceStart && price < b.priceEnd);
      if (bin) {
        if (liq.side === "buy" || liq.side === "BUY") {
          bin.buyValue += liq.usd_value;
        } else {
          bin.sellValue += liq.usd_value;
        }
        bin.totalValue += liq.usd_value;
      }
    });

    // Find max value to normalize widths
    maxBinValue = Math.max(...newBins.map(b => b.totalValue), 10000); // Minimum reference scale of $10K
    
    // Sort from highest price to lowest price (descending order)
    bins = newBins.reverse();
  }

  // Handle incoming live liquidation event
  function handleLiveLiquidation(liq: Liquidation) {
    if (bins.length === 0) return;
    const price = liq.price;
    const bin = bins.find(b => price >= b.priceStart && price < b.priceEnd);
    
    if (bin) {
      if (liq.side === "buy" || liq.side === "BUY") {
        bin.buyValue += liq.usd_value;
      } else {
        bin.sellValue += liq.usd_value;
      }
      bin.totalValue += liq.usd_value;
      bin.isUpdating = true;
      
      // Reset flash update state
      const targetBinPrice = bin.priceStart;
      setTimeout(() => {
        bins = bins.map(b => b.priceStart === targetBinPrice ? { ...b, isUpdating: false } : b);
      }, 800);

      // Recalculate max value
      maxBinValue = Math.max(...bins.map(b => b.totalValue), 10000);
      bins = [...bins];
    }
  }

  // Watch for price changes to shift bins, and watch for live websocket events
  let prevPrice = 0;
  let prevWhaleLiqTime = 0;
  let prevLiveLiq: Liquidation | null = null;

  $: {
    const currentPrice = $telemetry.btcPrice;
    // Recalculate bins if the price moves outside the current bin boundaries significantly
    if (currentPrice > 0 && Math.abs(currentPrice - prevPrice) > binSize * 1.5) {
      prevPrice = currentPrice;
      recalculateBins();
    }
  }

  $: {
    const liveLiq = $telemetry.rawLiquidation;
    if (liveLiq && liveLiq !== prevLiveLiq) {
      prevLiveLiq = liveLiq;
      handleLiveLiquidation(liveLiq);
    }
  }

  onMount(() => {
    fetchHistory();
  });

  // Formatting helpers
  function fmtPrice(p: number): string {
    return p.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  function fmtUSD(v: number): string {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(2)}M`;
    if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
    if (v === 0) return "—";
    return `$${v.toFixed(0)}`;
  }

  function changeBinSize(size: number) {
    binSize = size;
    recalculateBins();
  }
</script>

{#if $telemetry.enabled}
<section id="liquidation-profile" class="py-8 md:py-12 px-4 bg-transparent font-mono">
  <div class="max-w-4xl mx-auto w-full relative z-10">

    <!-- Section label -->
    <div class="font-mono text-base md:text-lg text-white/70 tracking-[0.2em] uppercase mb-8 flex items-center gap-3 flex-wrap">
      <span class="font-bold">:: LIQUIDATION PROFILE (24H)</span>
      <span class="px-2 py-1 rounded-sm border border-accent/20 bg-accent/5 text-xs tracking-[0.15em] text-accent/90 font-bold">
        SOURCE: NATS JETSTREAM (OKX & BITGET)
      </span>
      <div class="hidden sm:block flex-1 h-px bg-white/10"></div>
      
      <!-- Bin size controls -->
      <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-xs md:text-sm">
        <button 
          on:click={() => changeBinSize(100)} 
          class="px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer {binSize === 100 ? 'bg-accent/15 text-accent font-bold border-r border-white/10' : 'text-white/40 border-r border-white/10'}"
        >
          $100<span class="hidden sm:inline"> BIN</span>
        </button>
        <button 
          on:click={() => changeBinSize(250)} 
          class="px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer {binSize === 250 ? 'bg-accent/15 text-accent font-bold border-r border-white/10' : 'text-white/40 border-r border-white/10'}"
        >
          $250<span class="hidden sm:inline"> BIN</span>
        </button>
        <button 
          on:click={() => changeBinSize(500)} 
          class="px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer {binSize === 500 ? 'bg-accent/15 text-accent font-bold' : 'text-white/40'}"
        >
          $500<span class="hidden sm:inline"> BIN</span>
        </button>
      </div>
    </div>

    <!-- Main Board -->
    <div class="border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
      <div class="text-xs text-white/50 uppercase tracking-widest flex items-center justify-between mb-4 pb-2 border-b border-white/5">
        <span>PRICE RANGE</span>
        <div class="flex items-center gap-12 mr-4">
          <span>SHORT LIQUIDATIONS (RED) / LONG LIQUIDATIONS (GREEN)</span>
          <span>VOLUME</span>
        </div>
      </div>

      {#if isLoading}
        <div class="py-16 text-center text-white/40 text-sm animate-pulse">
          FETCHING JETSTREAM MARKET LOGS...
        </div>
      {:else}
        <div class="space-y-1.5">
          {#each bins as bin}
            {@const isCurrentPriceBin = $telemetry.btcPrice >= bin.priceStart && $telemetry.btcPrice < bin.priceEnd}
            {@const buyWidth = (bin.buyValue / maxBinValue) * 100}
            {@const sellWidth = (bin.sellValue / maxBinValue) * 100}
            {@const isWall = bin.totalValue >= 50000} <!-- Liquidity wall threshold $50k -->

            <div 
              class="grid grid-cols-12 items-center py-2 px-3 border rounded-sm transition-all duration-300
                {isCurrentPriceBin ? 'bg-accent/5 border-accent/40 shadow-[0_0_15px_rgba(0,240,255,0.06)]' : 'bg-transparent border-white/[0.03] hover:border-white/10'}
                {bin.isUpdating ? 'border-amber-400 bg-amber-400/5 duration-75' : ''}"
            >
              
              <!-- Price Scale -->
              <div class="col-span-4 sm:col-span-3 flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                <span class="text-xs sm:text-sm md:text-base font-semibold {isCurrentPriceBin ? 'text-accent' : 'text-white/80'}">
                  ${fmtPrice(bin.priceStart)}
                </span>
                <span class="hidden sm:inline text-xs text-white/40 font-light">—</span>
                <span class="hidden sm:inline text-xs md:text-sm text-white/60">
                  ${fmtPrice(bin.priceEnd)}
                </span>

                {#if isCurrentPriceBin}
                  <span class="text-[8px] sm:text-[10px] bg-accent text-black font-bold px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-sm animate-pulse">
                    MARKET
                  </span>
                {/if}
              </div>

              <!-- Heatmap Gauge bars -->
              <div class="col-span-6 sm:col-span-7 px-2 sm:px-4 relative flex items-center h-5">
                <!-- Center point line -->
                <div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-0"></div>

                <!-- Short Liquidations (Buy side - bars extend left) -->
                <div class="absolute right-1/2 top-1 bottom-1 flex justify-end z-10 select-none pointer-events-none" style="width: 50%">
                  <div 
                    class="h-full bg-rose-500/80 rounded-l-sm transition-all duration-500 relative
                      {isWall ? 'shadow-[0_0_10px_rgba(244,63,94,0.4)] bg-rose-500' : ''}
                      {bin.isUpdating && bin.buyValue > 0 ? 'bg-rose-400 scale-y-110' : ''}"
                    style="width: {buyWidth}%"
                  ></div>
                </div>

                <!-- Long Liquidations (Sell side - bars extend right) -->
                <div class="absolute left-1/2 top-1 bottom-1 flex justify-start z-10 select-none pointer-events-none" style="width: 50%">
                  <div 
                    class="h-full bg-emerald-500/80 rounded-r-sm transition-all duration-500 relative
                      {isWall ? 'shadow-[0_0_10px_rgba(16,185,129,0.4)] bg-emerald-500' : ''}
                      {bin.isUpdating && bin.sellValue > 0 ? 'bg-emerald-400 scale-y-110' : ''}"
                    style="width: {sellWidth}%"
                  ></div>
                </div>
              </div>

              <!-- Total Value / Wall Badge -->
              <div class="col-span-2 text-right flex items-center justify-end gap-2 pr-1">
                {#if isWall}
                  <span 
                    class="text-[10px] border border-amber-500/40 bg-amber-500/10 text-amber-400 font-bold px-1.5 py-0.5 rounded-sm tracking-wide animate-pulse-glow"
                    title="Liquidity Wall Detected"
                  >
                    WALL
                  </span>
                {/if}
                <span class="text-xs md:text-sm font-semibold {isWall ? 'text-white font-bold' : 'text-white/70'}">
                  {fmtUSD(bin.totalValue)}
                </span>
              </div>

            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Explanatory note -->
    <div class="mt-4 flex items-center justify-between text-xs text-white/45 font-mono">
      <span>* Profiles are generated in real-time by binning JetStream logs.</span>
      <span>Total 24h Volume reference: {fmtUSD(bins.reduce((acc, b) => acc + b.totalValue, 0))}</span>
    </div>

  </div>
</section>
{:else}
<section id="liquidation-profile" class="py-8 md:py-12 px-4 bg-transparent font-mono">
  <div class="max-w-4xl mx-auto w-full relative z-10">
    <div class="font-mono text-base md:text-lg text-white/70 tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
      <span class="font-bold">:: LIQUIDATION PROFILE (24H)</span>
      <div class="hidden sm:block flex-1 h-px bg-white/10"></div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-white/20"></div>
        <span class="text-sm text-white/40">OFFLINE</span>
      </div>
    </div>
    <div class="border border-white/10 bg-black/40 backdrop-blur-md p-12 rounded-sm text-center">
      <div class="font-mono text-white/30 text-sm uppercase tracking-widest">Aguardando conexão com ark-streams...</div>
    </div>
  </div>
</section>
{/if}
