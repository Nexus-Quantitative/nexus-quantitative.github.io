<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly, scale, slide } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    // --- State ---
    // 'safe' = Normal flow, small trades passing through
    // 'danger' = Risk event, large trade blocked by shield
    let mode: "safe" | "danger" = "safe";
    let isShieldActive = false;
    let hoveredModule: number | null = null;
    let showDemoInstructions = true;
    let showTechnicalPillars = false;
    interface Particle {
        id: number;
        type: "safe" | "danger";
        x: number;
        status?: "moving" | "blocked" | "success";
    }
    let particles: Particle[] = [];
    let nextId = 0;

    // --- Icons (embedded SVG for simplicity) ---
    const ICONS = {
        collectors: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7l8 5 8-5M12 12v7"></path></svg>`,
        fractal: `<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
        strategy: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
        lock: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`,
    };

    // --- Animation Logic ---
    let interval: any;

    function startSimulation() {
        clearInterval(interval);

        interval = setInterval(
            () => {
                const isDanger = mode === "danger" && Math.random() > 0.3;
                const type: "safe" | "danger" = isDanger ? "danger" : "safe";

                const particle: Particle = { id: nextId++, type, status: "moving", x: 0 };
                particles = [...particles, particle];

                if (particles.length > 15) particles.shift();
            },
            mode === "safe" ? 800 : 400,
        );
    }

    let animationFrame: any;
    const SHIELD_POSITION = 50; 
    const END_POSITION = 95;

    function loop() {
        particles = particles
            .map((p) => {
                if (p.status !== "moving") return p;

                const speed = p.type === "danger" ? 0.6 : 0.3;
                let newX = p.x + speed;

                if (newX >= SHIELD_POSITION && newX < SHIELD_POSITION + 2) {
                    if (p.type === "danger") {
                        p.status = "blocked";
                        triggerShieldReaction();
                        return p;
                    }
                }

                if (newX >= END_POSITION) {
                    p.status = "success";
                }

                return { ...p, x: newX };
            })
            .filter(
                (p) =>
                    p.status !== "success" &&
                    (p.status !== "blocked" || Math.random() > 0.05),
            );

        animationFrame = requestAnimationFrame(loop);
    }

    function triggerShieldReaction() {
        isShieldActive = true;
        setTimeout(() => (isShieldActive = false), 400);
    }

    onMount(() => {
        startSimulation();
        loop();
        return () => {
            clearInterval(interval);
            cancelAnimationFrame(animationFrame);
        };
    });

    $: if (mode) {
        startSimulation();
    }
</script>

<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono">
    <!-- CONTROLS -->
    <div class="flex justify-center gap-4 mb-12">
        <button
            on:click={() => (mode = "safe")}
            class="px-6 py-2 rounded border transition-all duration-300
            {mode === 'safe'
                ? 'bg-[#00FF94]/20 border-[#00FF94] text-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]'
                : 'border-gray-700 text-gray-500 hover:text-gray-300'}"
        >
            NORMAL OPERATION
        </button>
        <button
            on:click={() => (mode = "danger")}
            class="px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            {mode === 'danger'
                ? 'bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                : 'border-gray-700 text-gray-500 hover:text-gray-300'}"
        >
            <span class="relative flex h-3 w-3">
                {#if mode === "danger"}
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                    ></span>
                {/if}
                <span
                    class="relative inline-flex rounded-full h-3 w-3 {mode ===
                    'danger'
                        ? 'bg-red-500'
                        : 'bg-gray-500'}"
                ></span>
            </span>
            VOLATILITY SPIKE
        </button>
    </div>

    <!-- Demo Instructions Panel -->
    {#if showDemoInstructions}
        <div
            class="mb-8 max-w-3xl mx-auto bg-black/60 border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm"
            transition:fade
        >
            <div class="flex items-start justify-between mb-4">
                <h4
                    class="text-[#00FF94] font-mono text-sm uppercase tracking-widest"
                >
                    Interactive Simulation Guide
                </h4>
                <button
                    on:click={() => (showDemoInstructions = false)}
                    class="text-gray-500 hover:text-gray-300 transition-colors"
                >
                    ✕
                </button>
            </div>
            <ol
                class="space-y-2 text-xs text-gray-300 list-decimal list-inside"
            >
                <li>Observe the <strong>Collectors (Go)</strong> ingesting real-time market data via NATS.</li>
                <li>The <strong>Fractal Engine (Logic)</strong> analyzes incoming streams for unified patterns.</li>
                <li>Click <strong>VOLATILITY SPIKE</strong> to see how the hybrid ecosystem reacts to turbulence.</li>
            </ol>
            <p
                class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"
            >
                This simulation demonstrates the synergy of the multi-language reactive pipeline.
            </p>
        </div>
    {/if}

    <!-- REACTOR CONTAINER -->
    <div
        class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/20 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"
    >
        <!-- --- 1. COLLECTORS --- -->
        <div
            class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"
        >
            <div
                class="absolute inset-0 bg-[#00FF94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div
                class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest"
            >
                MODULE: COLLECTORS
            </div>

            <div
                class="relative z-10 w-32 h-32 rounded-full border-2 {mode ===
                'danger'
                    ? 'border-red-500/50 animate-pulse'
                    : 'border-[#00FF94]/30'} flex items-center justify-center bg-black/20"
            >
                <div
                    class="absolute inset-0 rounded-full border border-dashed {mode ===
                    'danger'
                        ? 'border-red-500/30 animate-[spin_1s_linear_infinite]'
                        : 'border-[#00FF94]/20 animate-[spin_10s_linear_infinite]'}"
                ></div>
                <div
                    class="text-[#00FF94] {mode === 'danger'
                        ? 'text-red-500'
                        : ''}"
                >
                    {@html ICONS.collectors}
                </div>
            </div>

            <div class="mt-6 text-center">
                <div
                    class="text-lg font-bold {mode === 'danger'
                        ? 'text-red-400'
                        : 'text-[#00FF94]'}"
                >
                    {mode === 'danger' ? 'VOLATILITY SPIKE' : 'ACTIVE INGESTION'}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                    Go / NATS
                </div>
            </div>
        </div>

        <!-- --- 2. FRACTAL ENGINE --- -->
        <div
            class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"
        >
            <div
                class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest"
            >
                MODULE: FRACTAL ENGINE
            </div>

            <div class="relative z-20">
                <div
                    class="absolute -inset-8 rounded-full bg-[#00FF94]/10 blur-xl transition-opacity duration-200
                    {isShieldActive
                        ? 'opacity-100 scale-110'
                        : 'opacity-0 scale-100'}"
                ></div>

                <div
                    class="relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900/40
                    {isShieldActive
                        ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]'
                        : 'border-[#00FF94]/30'}"
                >
                    <div
                        class="text-[#00FF94] transition-transform duration-200 {isShieldActive
                            ? 'scale-90 text-red-500'
                            : ''}"
                    >
                        {@html isShieldActive ? ICONS.lock : ICONS.fractal}
                    </div>

                    <div
                        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"
                    ></div>
                    <div
                        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"
                    ></div>
                </div>
            </div>

            <div class="mt-8 text-center z-10">
                <div
                    class="text-lg font-bold {isShieldActive
                        ? 'text-red-400 animate-pulse'
                        : 'text-[#00FF94]'} transition-colors"
                >
                    {isShieldActive
                        ? "COMPUTING FRACTALS"
                        : "PURE ANALYSIS"}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                    Logic / Indicators
                </div>
            </div>
        </div>

        <!-- --- 3. STRATEGY ENGINE --- -->
        <div
            class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"
        >
            <div
                class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest"
            >
                MODULE: STRATEGY ENGINE
            </div>

            <div
                class="relative z-10 w-32 h-32 rounded border-2 border-[#00FF94]/30 flex items-center justify-center bg-[#00FF94]/5 shadow-[0_0_20px_rgba(0,255,148,0.1)]"
            >
                <div class="text-[#00FF94]">
                    {@html ICONS.strategy}
                </div>
            </div>

            <div class="mt-6 text-center">
                <div class="text-lg font-bold text-[#00FF94]">
                    EXECUTION SIGNALS
                </div>
                <div class="text-xs text-gray-500 mt-1">Go / NATS</div>
            </div>
        </div>

        <!-- --- PARTICLES LAYER (Overlay) --- -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            {#each particles as p (p.id)}
                {#if p.status === "moving" || p.status === "blocked"}
                    <div
                        class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"
                        style="
                            left: {p.x}%; 
                            background-color: {p.type === 'danger'
                            ? '#ef4444'
                            : '#00FF94'};
                            box-shadow: 0 0 10px {p.type === 'danger'
                            ? '#ef4444'
                            : '#00FF94'};
                            opacity: {p.status === 'blocked' ? 0 : 1};
                            transform: scale({p.status === 'blocked' ? 2 : 1});
                        "
                    >
                        <div
                            class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 opacity-50"
                            style="background: linear-gradient(to right, transparent, {p.type === 'danger' ? '#ef4444' : '#00FF94'})"
                        ></div>
                    </div>
                {/if}

                {#if p.status === "blocked"}
                    <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"
                        style="left: {p.x}%;"
                    ></div>
                {/if}
            {/each}
        </div>
    </div>

    <!-- Technical Pillars Section -->
    <div class="mt-12 max-w-6xl mx-auto space-y-8">
        <button
            on:click={() => (showTechnicalPillars = !showTechnicalPillars)}
            class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-gray-900/50 to-black border border-gray-700 hover:border-[#00FF94]/50 rounded-xl p-6 transition-all duration-300"
        >
            <div class="flex items-center justify-center gap-4">
                <h3 class="text-2xl font-bold text-white">
                    Ark Streams Technical Pillars
                </h3>
                <svg
                    class="w-6 h-6 text-[#00FF94] transition-transform duration-300 {showTechnicalPillars
                        ? 'rotate-180'
                        : ''}"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            <p class="text-sm text-gray-400 mt-2">
                Hybrid High-Performance Reactive Trading Infrastructure
            </p>
        </button>

        {#if showTechnicalPillars}
            <div class="space-y-6" transition:slide={{ duration: 400 }}>
                <!-- Pillar 1 -->
                <div
                    class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🛠️</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-[#00FF94] mb-2">
                                1. Hybrid Architecture (Clojure + Go)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                Using the right tool for each operational constraint, maximizing both developer velocity and system performance.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-[#00FF94]/90 italic">
                                    "A synergistic approach where high-level abstractions meet low-level efficiency."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pillar 2 -->
                <div
                    class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🧪</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-[#00FF94] mb-2">
                                2. Strategy Discovery (Clojure)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                Expressive modeling and REPL-driven research for rapid iteration on complex trading hypotheses.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-[#00FF94]/90 italic">
                                    "Leveraging functional programming for robust, verifiable market analysis."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pillar 3 -->
                <div
                    class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🏎️</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-[#00FF94] mb-2">
                                3. Edge Execution (Go)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                Low-latency performance and high concurrency in production, ensuring split-second execution precision.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-[#00FF94]/90 italic">
                                    "Optimized binaries handling massive data throughput with minimal jitter."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pillar 4 -->
                <div
                    class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🚌</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-[#00FF94] mb-2">
                                4. Universal Data Bus (NATS)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                Decoupling runtimes through a common event language, enabling seamless communication across the entire stack.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-[#00FF94]/90 italic">
                                    "NATS JetStream provides the backbone for a truly reactive and modular ecosystem."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pillar 5 -->
                <div
                    class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🌍</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-[#00FF94] mb-2">
                                5. Multi-Language Ecosystem
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                A platform where Clojure, Go, and Python coexist via JetStream, leveraging the best of each language.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-[#00FF94]/90 italic">
                                    "Interoperability without compromise, designed for the future of quantitative finance."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
</style>
