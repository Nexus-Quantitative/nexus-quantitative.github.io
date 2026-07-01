<script lang="ts">
  import { ArrowLeft, Info, Database } from "@lucide/svelte";
  import AggressionSpeedometer from "./AggressionSpeedometer.svelte";
  import LiquidationHeatmap from "./LiquidationHeatmap.svelte";
  import Metrics from "./Metrics.svelte";

  let showInfo = $state(true);
</script>

<div class="w-full relative z-10 pointer-events-auto text-white min-h-screen pt-24 pb-36 px-4">
  <!-- Back Button (Floating) -->
  <a 
    href="#/" 
    class="fixed top-4 left-4 md:top-8 md:left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 text-xs md:text-sm"
  >
    <ArrowLeft size={16} />
    <span class="hidden sm:inline">[ NEXUS QUANT ]</span>
  </a>

  <div class="max-w-4xl mx-auto w-full space-y-8">
    <!-- Title Block -->
    <div class="text-center space-y-4 mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter font-mono">
        NEXUS TERMINAL
      </h1>
      <p class="text-xs text-white/40 tracking-[0.25em] font-mono">
        :: REAL-TIME QUANTITATIVE TELEMETRY STREAM
      </p>
    </div>

    <!-- Live Telemetry Dashboard Panels -->
    <Metrics compact={true} />

    <AggressionSpeedometer />
    
    <LiquidationHeatmap />

    <!-- Transparency Layer / Data Source Disclosure -->
    <div class="border border-accent/20 bg-black/40 backdrop-blur-md p-6 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)] font-mono">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
        <div class="flex items-center gap-2.5 text-accent">
          <Info size={18} />
          <span class="text-sm font-bold tracking-widest uppercase">TRANSPARÊNCIA DA TELEMETRIA (FONTE DOS DADOS)</span>
        </div>
        <button 
          onclick={() => showInfo = !showInfo}
          class="text-xs text-white/40 hover:text-white/80 transition-colors uppercase border border-white/15 px-2 py-1 rounded-sm bg-white/5 cursor-pointer w-fit"
        >
          {showInfo ? "[ OCULTAR DETALHES ]" : "[ EXIBIR DETALHES ]"}
        </button>
      </div>

      {#if showInfo}
        <div class="space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            Esta página consolida fluxos quantitativos de dados de mercado de alta frequência. Abaixo estão descritas as origens de cada métrica exibida nos componentes:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <!-- Speedometer -->
            <div class="p-4 border border-white/5 bg-white/[0.02] rounded-sm space-y-2.5">
              <div class="text-xs text-accent font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Database size={12} /> Velocímetro de Agressão
              </div>
              <p class="text-xs md:text-sm text-white/60">
                Consome negociações individuais em tempo real diretamente dos WebSockets da <strong class="text-white/85">OKX</strong> e da <strong class="text-white/85">Bybit</strong>. Calcula o volume comprador agressivo contra o vendedor para indicar a direção do fluxo.
              </p>
            </div>
            
            <!-- Heatmap -->
            <div class="p-4 border border-white/5 bg-white/[0.02] rounded-sm space-y-2.5">
              <div class="text-xs text-accent font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Database size={12} /> Perfil de Liquidações
              </div>
              <p class="text-xs md:text-sm text-white/60">
                Processado via broker de mensageria de alto desempenho <strong class="text-white/85">NATS JetStream</strong>. Captura e armazena eventos de liquidação forçada das exchanges <strong class="text-white/85">OKX</strong> e <strong class="text-white/85">Bitget</strong>, organizando-os em faixas de preço (bins).
              </p>
            </div>
            
            <!-- Live Telemetry -->
            <div class="p-4 border border-white/5 bg-white/[0.02] rounded-sm space-y-2.5">
              <div class="text-xs text-accent font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Database size={12} /> Telemetria e Feed
              </div>
              <p class="text-xs md:text-sm text-white/60">
                O preço, juros em aberto (Open Interest) e taxas de financiamento (Funding) são obtidos via conexão WebSocket direta da exchange <strong class="text-white/85">Bitget</strong>. O feed de grandes liquidações exibe transações de valor superior a <strong class="text-white/85">$1M USD</strong> identificadas em tempo real.
              </p>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
