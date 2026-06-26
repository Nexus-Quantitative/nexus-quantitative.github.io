<script lang="ts">
  import { telemetry, type Liquidation } from "./telemetry";
  import { fade, slide, fly } from "svelte/transition";
  import { flip } from "svelte/animate";

  interface Alert extends Liquidation {
    id: string;
    isNew: boolean;
  }

  let alerts: Alert[] = [];
  let prevWhaleLiq: Liquidation | null = null;

  // Formatting helper
  function fmtUSD(v: number): string {
    if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(2)}M`;
    if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}K`;
    return `$${v.toFixed(0)}`;
  }

  function fmtPrice(p: number): string {
    return p.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }

  $: {
    const current = $telemetry.latestWhaleLiq;
    if (current && current !== prevWhaleLiq) {
      prevWhaleLiq = current;
      
      const newAlert: Alert = {
        ...current,
        id: Math.random().toString(36).substring(2, 9),
        isNew: true
      };

      // Add to start of list, limit to 4 active notifications
      alerts = [newAlert, ...alerts].slice(0, 4);

      // Disable the "isNew" flash effect after 1.5s
      const alertId = newAlert.id;
      setTimeout(() => {
        alerts = alerts.map(a => a.id === alertId ? { ...a, isNew: false } : a);
      }, 1500);
      
      // Automatically fade out after 8 seconds
      setTimeout(() => {
        alerts = alerts.filter(a => a.id !== alertId);
      }, 8000);
    }
  }

  function removeAlert(id: string) {
    alerts = alerts.filter(a => a.id !== id);
  }
</script>

{#if alerts.length > 0}
  <div 
    class="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[320px] pointer-events-none font-mono"
    aria-live="polite"
  >
    <!-- Header title -->
    <div 
      class="text-[9px] text-white/40 tracking-[0.25em] flex items-center justify-between px-2 uppercase select-none"
      transition:fade
    >
      <span>:: Whale Liquidation Stream</span>
      <div class="flex items-center gap-1.5">
        <div class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
        <span>LIVE</span>
      </div>
    </div>

    <!-- Alert Cards -->
    {#each alerts as alert (alert.id)}
      <div
        animate:flip={{ duration: 300 }}
        in:fly={{ x: 200, opacity: 0, duration: 400 }}
        out:fade={{ duration: 300 }}
        class="pointer-events-auto relative border bg-black/95 p-4 rounded-sm backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-between group transition-all duration-300
          {alert.side === 'buy' || alert.side === 'BUY' 
            ? (alert.isNew ? 'border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]' : 'border-rose-950/70 hover:border-rose-800') 
            : (alert.isNew ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border-emerald-950/70 hover:border-emerald-800')
          }"
      >
        <!-- Directional Glow Edge Accent -->
        <div class="absolute left-0 top-0 bottom-0 w-[3px] 
          {alert.side === 'buy' || alert.side === 'BUY' ? 'bg-rose-500' : 'bg-emerald-500'}"
        ></div>

        <!-- Content -->
        <div class="pl-2 space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold uppercase tracking-wider
              {alert.side === 'buy' || alert.side === 'BUY' ? 'text-rose-400' : 'text-emerald-400'}"
            >
              {alert.side === 'buy' || alert.side === 'BUY' ? '▼ SHORT LIQUIDATED' : '▲ LONG LIQUIDATED'}
            </span>
            {#if alert.isNew}
              <span class="text-[8px] px-1 py-0.2 bg-white text-black font-bold animate-pulse uppercase rounded-sm">NEW</span>
            {/if}
          </div>

          <div class="flex items-baseline gap-2">
            <span class="text-lg font-bold text-white tracking-tight">
              {fmtUSD(alert.usd_value)}
            </span>
            <span class="text-white/40 text-[10px]">
              @ ${fmtPrice(alert.price)}
            </span>
          </div>
        </div>

        <!-- Close button -->
        <button
          on:click={() => removeAlert(alert.id)}
          class="text-white/20 hover:text-white/60 transition-colors duration-200 p-1 text-xs cursor-pointer focus:outline-none"
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      </div>
    {/each}
  </div>
{/if}
