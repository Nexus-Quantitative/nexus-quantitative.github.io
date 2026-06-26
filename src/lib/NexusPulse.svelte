<script lang="ts">
  import { onMount } from "svelte";
  import { telemetry } from "./telemetry";

  let showDropdown = false;
  let container: HTMLDivElement;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function closeDropdown() {
    showDropdown = false;
  }

  function handleDocumentClick(event: MouseEvent) {
    if (showDropdown && container && !container.contains(event.target as Node)) {
      closeDropdown();
    }
  }

  onMount(() => {
    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  });
</script>

{#if $telemetry.enabled}
  <div bind:this={container} class="relative inline-block text-left font-mono pointer-events-auto">
    <!-- Badge Button -->
    <button
      on:click={toggleDropdown}
      class="flex items-center gap-2 focus:outline-none cursor-pointer group"
      aria-label="Toggle telemetry details"
    >
      <div class="relative flex h-2 w-2">
        {#if $telemetry.natsOk === true}
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]"></span>
        {:else if $telemetry.natsOk === false}
          <span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        {:else}
          <span class="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>
        {/if}
      </div>
      <span class="text-xs transition-colors duration-300 text-white/50 group-hover:text-accent font-semibold uppercase tracking-wider">
        {#if $telemetry.natsOk === true}
          SYSTEMS ACTIVE
        {:else if $telemetry.natsOk === false}
          OFFLINE
        {:else}
          CONNECTING...
        {/if}
      </span>
      <span class="text-[9px] text-white/30 group-hover:text-white/60 transition-transform duration-200 block" style="transform: {showDropdown ? 'rotate(180deg)' : 'rotate(0)'}">
        ▼
      </span>
    </button>

    <!-- Dropdown Details -->
    {#if showDropdown}
      <div
        class="absolute right-0 mt-3 w-60 origin-top-right rounded-sm border border-white/10 bg-black/90 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-l-2 border-l-accent z-50 text-xs space-y-3"
      >
        <div class="font-bold text-[9px] text-white/40 tracking-[0.2em] uppercase border-b border-white/5 pb-2">
          :: TELEMETRY DIAGNOSTICS
        </div>

        <div class="space-y-2.5">
          <!-- NATS Status -->
          <div class="flex items-center justify-between">
            <span class="text-white/50 uppercase text-[10px]">NATS Cluster</span>
            <span class="font-bold {$telemetry.natsOk === true ? 'text-[#00FF94]' : $telemetry.natsOk === false ? 'text-rose-400' : 'text-white/40'}">
              {$telemetry.natsOk === true ? "ONLINE" : $telemetry.natsOk === false ? "OFFLINE" : "CONNECTING"}
            </span>
          </div>

          <!-- Active Streams -->
          <div class="flex items-center justify-between">
            <span class="text-white/50 uppercase text-[10px]">Data Streams</span>
            <span class="font-bold text-white/80">
              {$telemetry.streamsOnline > 0 ? `${$telemetry.streamsOnline} / ${$telemetry.streamsTotal} ACTIVE` : "—"}
            </span>
          </div>

          <!-- Engine state -->
          <div class="flex items-center justify-between">
            <span class="text-white/50 uppercase text-[10px]">Ark Engine</span>
            <span class="font-bold {$telemetry.engineRunning ? 'text-[#00FF94]' : 'text-white/40'}">
              {$telemetry.engineRunning ? "RUNNING" : "STANDBY"}
            </span>
          </div>

          <!-- Tunnel status -->
          <div class="flex items-center justify-between">
            <span class="text-white/50 uppercase text-[10px]">Secure Tunnel</span>
            <span class="font-bold {$telemetry.natsOk !== null ? 'text-[#00FF94]' : 'text-white/40'}">
              {$telemetry.natsOk !== null ? "ENCRYPTED" : "—"}
            </span>
          </div>
        </div>

        <!-- Metadata footer -->
        <div class="border-t border-white/5 pt-2 flex items-center justify-between text-[9px] text-white/30 font-mono">
          <span>HOST: VPS-NEXUS-01</span>
          <span>v1.2.4</span>
        </div>
      </div>
    {/if}
  </div>
{/if}
