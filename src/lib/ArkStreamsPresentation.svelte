<script lang="ts">
    import { t } from "svelte-i18n";
    import { fade } from "svelte/transition";
    import { ArrowLeft } from "@lucide/svelte";
    import NatsTopology from "./presentation/NatsTopology.svelte";
    import ArkReactorCore from "./presentation/ArkReactorCore.svelte";

    const slideClass =
        "min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";

    const entryFilters = [
        { id: "01", label: "Alligator Transition", long: "Bias just turned Bullish", short: "Bias just turned Bearish" },
        { id: "02", label: "Alligator Spread", long: "Jaw/teeth/lips spread above threshold", short: "Same" },
        { id: "03", label: "BB Squeeze Gate", long: "BB width above 50th percentile (last 300 bars)", short: "Same" },
        { id: "04", label: "Awesome Oscillator", long: "AO > 0 and accelerating (green bar)", short: "AO < 0 and accelerating (red bar)" },
        { id: "05", label: "Gator Mouth", long: "Current mouth wider than previous bar", short: "Same" },
        { id: "06", label: "Vol + MFI", long: "—", short: "Volume above SMA and MFI in GREEN or FAKE quadrant" },
    ];

    const exitConditions = [
        { label: "Take Profit", detail: "2 × ATR(14) from entry" },
        { label: "Stop Loss", detail: "2 × ATR(14) on the opposite side" },
        { label: "Trend Reversal", detail: "Alligator bias flips against position" },
        { label: "Teeth Touch", detail: "Price touches teeth with 2-bar debounce" },
    ];

    const roadmapPhases = [
        {
            phase: "PHASE 1",
            name: "Single-Node Intelligence",
            status: "current",
            items: ["Single Go binary, all workers", "NATS persists everything", "AlligatorTrend on BTCUSDT + XAUUSDT", "Nexus Terminal desktop"],
        },
        {
            phase: "PHASE 2",
            name: "Symbol & Exchange Expansion",
            status: "next",
            items: ["Symbol-agnostic pipeline", "New pair = new collector only", "Strategies pick up via market.analyzed.*", "Liquidation heatmap (KV price bins)"],
        },
        {
            phase: "PHASE 3",
            name: "Intelligence Layer",
            status: "soon",
            items: ["On-chain integration (Aave/Compound)", "AI Snapshot API → LLM context", "Agentic tools (function-calling)", "CoinGlass + global liquidation data"],
        },
        {
            phase: "PHASE 4",
            name: "Distributed Cluster",
            status: "later",
            items: ["3-node NATS JetStream cluster", "Raft consensus, stream replication", "Independent Engine / Strategy / API nodes", "Nexus Terminal connects to any node"],
        },
    ];

    const statusColor: Record<string, string> = {
        current: "text-accent border-accent bg-accent/10",
        next: "text-blue-400 border-blue-400/50 bg-blue-400/10",
        soon: "text-purple-400 border-purple-400/50 bg-purple-400/10",
        later: "text-gray-500 border-gray-600 bg-gray-500/10",
    };
</script>

<div class="w-full relative z-10 pointer-events-auto text-white">
    <!-- Back Button (Floating) -->
    <a 
        href="#/" 
        class="fixed top-4 left-4 md:top-8 md:left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 text-xs md:text-sm"
    >
        <ArrowLeft size={16} />
        <span class="hidden sm:inline">[ {$t("report.nav_back")} ]</span>
    </a>

    <!-- SLIDE 1: HERO -->
    <section class={slideClass} in:fade>
        <div class="max-w-4xl w-full text-center space-y-8">
            <div class="flex flex-wrap justify-center gap-3 mb-4">
                <span class="px-3 py-1 border border-accent/40 rounded-full bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Go 1.23</span>
                <span class="px-3 py-1 border border-blue-400/40 rounded-full bg-blue-400/10 text-blue-400 font-mono text-xs tracking-widest uppercase">NATS JetStream</span>
                <span class="px-3 py-1 border border-purple-400/40 rounded-full bg-purple-400/10 text-purple-400 font-mono text-xs tracking-widest uppercase">Wails Desktop</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter">
                ARK STREAMS
            </h1>
            <h2 class="text-xl md:text-2xl text-gray-400 font-light">
                {$t("arkStreams.subtitle")}
            </h2>
            <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                <div class="text-center">
                    <div class="text-2xl font-bold text-accent font-mono">7d</div>
                    <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Data</div>
                </div>
                <div class="text-center border-x border-white/10">
                    <div class="text-2xl font-bold text-accent font-mono">365d</div>
                    <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Strategy Audit</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-accent font-mono">∞</div>
                    <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Replayable</div>
                </div>
            </div>
        </div>
    </section>

    <!-- SLIDE 2: THE PROBLEM -->
    <section class={slideClass}>
        <div class="max-w-3xl w-full space-y-10">
            <h3 class="text-xl text-accent font-mono tracking-wider uppercase text-center">
                01 // {$t("arkStreams.section1.title")}
            </h3>

            <!-- Quote -->
            <div class="bg-black/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative">
                <div class="absolute -top-3 -left-3 text-6xl text-accent font-serif">"</div>
                <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                    {$t("arkStreams.section1.text")}
                </p>
            </div>

            <!-- Capabilities -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each ["arkStreams.section1.cap1", "arkStreams.section1.cap2", "arkStreams.section1.cap3", "arkStreams.section1.cap4"] as key}
                    <div class="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/5">
                        <span class="text-accent font-mono text-lg leading-none mt-0.5">▸</span>
                        <span class="text-gray-300 text-sm">{$t(key)}</span>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- SLIDE 3: NATS BACKBONE -->
    <section class={slideClass}>
        <div class="max-w-6xl w-full flex flex-col items-center gap-6">
            <div class="text-center space-y-2">
                <h3 class="text-xl text-accent font-mono tracking-wider uppercase">
                    02 // {$t("arkStreams.section2.title")}
                </h3>
                <div class="text-sm text-gray-500 uppercase tracking-widest">
                    {$t("arkStreams.section2.subtitle")}
                </div>
            </div>

            <div class="w-full">
                <NatsTopology />
            </div>
        </div>
    </section>

    <!-- SLIDE 4: FRACTAL ENGINE -->
    <section class={slideClass}>
        <div class="max-w-6xl w-full flex flex-col gap-10">
            <div class="text-center max-w-4xl mx-auto space-y-4">
                <h3 class="text-xl text-accent font-mono tracking-wider uppercase">
                    03 // {$t("arkStreams.section3.title")}
                </h3>
                <div class="text-sm text-gray-500 uppercase tracking-widest">
                    {$t("arkStreams.section3.role")}
                </div>
                <div class="bg-gradient-to-r from-accent/20 via-purple-900/20 to-accent/20 border border-accent/30 rounded-xl p-5 backdrop-blur-sm">
                    <p class="text-base text-accent font-mono mb-1">{$t("arkStreams.section3.subtitle")}</p>
                    <p class="text-xs text-gray-400">{$t("arkStreams.section3.subtitle2")}</p>
                </div>
            </div>

            <div class="w-full">
                <ArkReactorCore />
            </div>

            <!-- Indicator chips -->
            <div class="flex flex-wrap justify-center gap-3">
                {#each ["Alligator (SMMA jaw/teeth/lips)", "Awesome Oscillator", "Accelerator Oscillator", "Market Facilitation Index", "Fractal highs/lows"] as ind}
                    <span class="px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs">{ind}</span>
                {/each}
            </div>
        </div>
    </section>

    <!-- SLIDE 5: ALLIGATOR TREND STRATEGY -->
    <section class={slideClass}>
        <div class="max-w-5xl w-full space-y-8">
            <div class="text-center space-y-2">
                <h3 class="text-xl text-accent font-mono tracking-wider uppercase">
                    04 // {$t("arkStreams.section4.title")}
                </h3>
                <p class="text-gray-500 text-sm">{$t("arkStreams.section4.subtitle")}</p>
            </div>

            <!-- Entry conditions table -->
            <div class="w-full overflow-hidden border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm">
                <div class="grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/5 border-b border-white/10">
                    <div class="col-span-1 p-3 text-center">#</div>
                    <div class="col-span-3 p-3">Filter</div>
                    <div class="col-span-4 p-3 text-accent/80">▲ Long</div>
                    <div class="col-span-4 p-3 text-red-400/80">▼ Short</div>
                </div>
                {#each entryFilters as f}
                    <div class="grid grid-cols-12 text-xs border-b border-white/5 hover:bg-white/5 transition-colors">
                        <div class="col-span-1 p-3 text-center text-gray-600 font-mono">{f.id}</div>
                        <div class="col-span-3 p-3 text-gray-300 font-medium">{f.label}</div>
                        <div class="col-span-4 p-3 text-accent/90">{f.long}</div>
                        <div class="col-span-4 p-3 text-red-400/90">{f.short}</div>
                    </div>
                {/each}
            </div>

            <!-- Exit conditions -->
            <div class="space-y-2">
                <div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Exit Conditions — first to trigger wins</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {#each exitConditions as ex}
                        <div class="p-3 border border-red-400/20 rounded-lg bg-red-400/5">
                            <div class="text-red-400 font-mono text-xs font-bold mb-1">{ex.label}</div>
                            <div class="text-gray-400 text-xs">{ex.detail}</div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- PaperBroker note -->
            <div class="p-4 border border-white/10 rounded-lg bg-white/5 text-xs text-gray-400 font-mono">
                <span class="text-accent">PaperBroker</span> — in-memory matching engine · position pyramiding · MFE/MAE tracking · FixedFractionalRM · used for live paper trading and backtests
            </div>
        </div>
    </section>

    <!-- SLIDE 6: ROADMAP -->
    <section class={slideClass}>
        <div class="max-w-5xl w-full space-y-8">
            <div class="text-center space-y-2">
                <h3 class="text-xl text-accent font-mono tracking-wider uppercase">
                    05 // {$t("arkStreams.section5.title")}
                </h3>
                <p class="text-gray-500 text-sm">{$t("arkStreams.section5.text")}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each roadmapPhases as phase}
                    <div class="p-5 border rounded-xl space-y-3 {statusColor[phase.status]} border-opacity-50">
                        <div class="flex items-center justify-between">
                            <span class="font-mono text-xs tracking-widest">{phase.phase}</span>
                            {#if phase.status === "current"}
                                <span class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">● LIVE</span>
                            {/if}
                        </div>
                        <h4 class="font-bold text-white text-sm">{phase.name}</h4>
                        <ul class="space-y-1">
                            {#each phase.items as item}
                                <li class="text-xs text-gray-400 flex items-start gap-2">
                                    <span class="text-gray-600 mt-0.5">–</span>
                                    {item}
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- SLIDE 7: OUTRO -->
    <section class={slideClass}>
        <div class="max-w-2xl w-full text-center space-y-8">
            <p class="text-3xl md:text-5xl font-mono text-white leading-snug uppercase tracking-tighter">
                {$t("arkStreams.conclusion")}
            </p>

            <div class="flex justify-center gap-8 mt-12 opacity-50 text-xs font-mono tracking-widest uppercase">
                <span>{$t("arkStreams.footer.memory")}</span>
                <span>•</span>
                <span>{$t("arkStreams.footer.latency")}</span>
                <span>•</span>
                <span>{$t("arkStreams.footer.stack")}</span>
            </div>

            <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                <a href="#/" class="px-8 py-3 bg-accent hover:bg-accent/80 text-black rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">
                    BACK TO HOME
                </a>
            </div>
        </div>
    </section>

    <div class="h-12"></div>
</div>

<style>
    :global(html) {
        scroll-snap-type: y mandatory;
    }

    section {
        scroll-snap-align: start;
    }
</style>
