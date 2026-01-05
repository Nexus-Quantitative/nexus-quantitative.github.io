<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly, scale, slide } from "svelte/transition";
    import { elasticOut } from "svelte/easing";
    import { t } from "svelte-i18n";

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
        brain: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
        shield: `<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
        lock: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`,
        vault: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    };

    // --- Animation Logic ---
    // --- Animation Logic ---

    // --- Simpler Simulation Loop ---
    let interval: any;

    function startSimulation() {
        clearInterval(interval);

        interval = setInterval(
            () => {
                // Spawn a particle
                const id = nextId++;
                // 20% chance of 'danger' particle if mode is danger, otherwise strict safe
                // Actually for the demo, when we click "TEST RESILIENCE", we switch mode to Danger and spawn a specific "Attack" sequence.

                const isDanger = mode === "danger" && Math.random() > 0.3; // High chance of danger in danger mode
                const type: "safe" | "danger" = isDanger ? "danger" : "safe";

                const particle: Particle = { id, type, status: "moving", x: 0 };
                particles = [...particles, particle];

                // Cleanup old particles
                if (particles.length > 10) particles.shift();
            },
            mode === "safe" ? 800 : 400,
        ); // Faster in danger mode
    }

    // Handle Animation Frame locally to update positions
    let animationFrame: any;
    const SHIELD_POSITION = 50; // Middle of the container (approx %)
    const END_POSITION = 95;

    function loop() {
        particles = particles
            .map((p) => {
                if (p.status !== "moving") return p;

                const speed = p.type === "danger" ? 0.4 : 0.2;
                let newX = p.x + speed;

                // Collision Detection with Shield
                if (newX >= SHIELD_POSITION && newX < SHIELD_POSITION + 2) {
                    if (p.type === "danger") {
                        // BLOCKED!
                        p.status = "blocked";
                        triggerShieldReaction();
                        return p;
                    }
                    // Safe particles pass through
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
        // Filter out success immediately (or fade out), filter out blocked slowly (dissipate)

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
                ? 'bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
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
            INJECT RISK (BUG)
        </button>
    </div>

    <!-- Demo Instructions Panel -->
    {#if showDemoInstructions}
        <div
            class="mb-8 max-w-3xl mx-auto bg-black/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"
            transition:fade
        >
            <div class="flex items-start justify-between mb-4">
                <h4
                    class="text-cyan-400 font-mono text-sm uppercase tracking-widest"
                >
                    {$t("presentation.section3.demo.instruction")}
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
                <li>{$t("presentation.section3.demo.step1")}</li>
                <li>{$t("presentation.section3.demo.step2")}</li>
                <li>{$t("presentation.section3.demo.step3")}</li>
            </ol>
            <p
                class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"
            >
                {$t("presentation.section3.demo.conclusion")}
            </p>
        </div>
    {/if}

    <!-- REACTOR CONTAINER -->
    <div
        class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"
    >
        <!-- --- 1. THE STRATEGY (BRAIN) --- -->
        <div
            class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"
        >
            <div
                class="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Label -->
            <div
                class="absolute top-4 left-4 text-xs text-cyan-500 tracking-widest"
            >
                MODULE: STRATEGY ENGINE
            </div>

            <!-- Visual -->
            <div
                class="relative z-10 w-32 h-32 rounded-full border-2 {mode ===
                'danger'
                    ? 'border-red-500/50 animate-pulse'
                    : 'border-cyan-500/30'} flex items-center justify-center bg-black/50"
            >
                <!-- Inner pulses -->
                <div
                    class="absolute inset-0 rounded-full border border-dashed {mode ===
                    'danger'
                        ? 'border-red-500/30 animate-[spin_1s_linear_infinite]'
                        : 'border-cyan-500/20 animate-[spin_10s_linear_infinite]'}"
                ></div>
                <div
                    class="text-cyan-400 {mode === 'danger'
                        ? 'text-red-500'
                        : ''}"
                >
                    {@html ICONS.brain}
                </div>
            </div>

            <!-- Status Text -->
            <div class="mt-6 text-center">
                <div
                    class="text-lg font-bold {mode === 'danger'
                        ? 'text-red-400'
                        : 'text-cyan-400'}"
                >
                    {mode === "danger" ? "CRITICAL ERROR" : "ALGORITHM ACTIVE"}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                    {mode === "danger"
                        ? "Detecting anomalous signal..."
                        : "Generating orders..."}
                </div>
            </div>
        </div>

        <!-- --- 2. THE RISK GUARD (SHIELD) --- -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
            class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"
        >
            <div
                class="absolute top-4 left-4 text-xs text-orange-500 tracking-widest"
            >
                MODULE: RISK GUARD + EXECUTION
            </div>

            <!-- The Gate/Shield Visual -->
            <div class="relative z-20">
                <!-- Shield Effect Ring -->
                <div
                    class="absolute -inset-8 rounded-full bg-orange-500/10 blur-xl transition-opacity duration-200
                    {isShieldActive
                        ? 'opacity-100 scale-110'
                        : 'opacity-0 scale-100'}"
                ></div>

                <div
                    class="relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900
                    {isShieldActive
                        ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]'
                        : 'border-orange-500/30'}"
                >
                    <div
                        class="text-orange-500 transition-transform duration-200 {isShieldActive
                            ? 'scale-90 text-red-500'
                            : ''}"
                    >
                        {@html isShieldActive ? ICONS.lock : ICONS.shield}
                    </div>

                    <!-- HUD Lines -->
                    <div
                        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"
                    ></div>
                    <div
                        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"
                    ></div>
                </div>
            </div>

            <!-- Stats -->
            <div class="mt-8 text-center z-10">
                <div
                    class="text-lg font-bold {isShieldActive
                        ? 'text-red-400'
                        : 'text-orange-400'} transition-colors"
                >
                    {isShieldActive
                        ? "CIRCUIT BREAKER: TRIPPED"
                        : "SYSTEM: ARMED"}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                    Polylith Isolation Layer
                </div>
            </div>
        </div>

        <!-- --- 3. THE CAPITAL (EXECUTION) --- -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
            class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"
        >
            <div
                class="absolute top-4 left-4 text-xs text-green-500 tracking-widest"
            >
                MODULE: CAPITAL
            </div>

            <div
                class="relative z-10 w-32 h-32 rounded border-2 border-green-500/30 flex items-center justify-center bg-green-900/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
                <div class="text-green-400">
                    {@html ICONS.vault}
                </div>
            </div>

            <div class="mt-6 text-center">
                <div class="text-lg font-bold text-green-400">
                    ASSETS SECURED
                </div>
                <div class="text-xs text-gray-500 mt-1">Direct-to-Exchange</div>
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
                            : '#06b6d4'};
                            box-shadow: 0 0 10px {p.type === 'danger'
                            ? '#ef4444'
                            : '#06b6d4'};
                            opacity: {p.status === 'blocked' ? 0 : 1};
                            transform: scale({p.status === 'blocked' ? 2 : 1});
                        "
                    >
                        <!-- Trail -->
                        <div
                            class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-{p.type ===
                            'danger'
                                ? 'red-500'
                                : 'cyan-500'} opacity-50"
                        ></div>
                    </div>
                {/if}

                {#if p.status === "blocked"}
                    <!-- Explosion Effect at Shield -->
                    <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"
                        style="left: {p.x}%;"
                    ></div>
                {/if}
            {/each}
        </div>
    </div>

    <!-- Description / Legend -->
    <div
        class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center"
    >
        <div>Algorithm (Volatility)</div>
        <div class="text-orange-400">Security Layer (Immutable Rules)</div>
        <div>Execution (Real Money)</div>
    </div>

    <!-- Technical Pillars Section -->
    <div class="mt-12 max-w-6xl mx-auto space-y-8">
        <!-- Toggle Header -->
        <button
            on:click={() => (showTechnicalPillars = !showTechnicalPillars)}
            class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300"
        >
            <div class="flex items-center justify-center gap-4">
                <h3 class="text-2xl font-bold text-white">
                    The 5 Technical Pillars
                </h3>
                <svg
                    class="w-6 h-6 text-purple-400 transition-transform duration-300 {showTechnicalPillars
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
                What makes Ark Engine a platform, not just a trading bot
            </p>
        </button>

        {#if showTechnicalPillars}
            <div class="space-y-6" transition:slide={{ duration: 400 }}>
                <!-- Pillar 1: Bitemporality -->
                <div
                    class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">⏰</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-purple-300 mb-2">
                                1. Bitemporality: "The Honest Time Machine"
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                <strong class="text-purple-200"
                                    >The Concept:</strong
                                > The system knows the difference between when an
                                event happened (Valid Time) and when the system learned
                                about it (Transaction Time).
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-purple-500 p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-purple-100 italic">
                                    "We eliminate Look-ahead Bias. We can go
                                    back to 2:00 PM last Tuesday and see the
                                    world exactly as the algorithm saw it at
                                    that second, ignoring data that arrived
                                    late. This guarantees mathematically perfect
                                    simulations."
                                </p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong class="text-purple-300"
                                    >Application:</strong
                                > Backtests that reflect production reality, forensic
                                failure auditing, and automatic regulatory compliance.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Pillar 2: Mechanical Causality -->
                <div
                    class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">🔬</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-cyan-300 mb-2">
                                2. Mechanical Causality: "Glass Box Trading"
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                <strong class="text-cyan-200"
                                    >The Concept:</strong
                                > The system operates based on Cause and Effect (Market
                                Mechanics), not statistical hope. Opposing the industry's
                                "Black Box" approach based on unexplainable AI.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-cyan-500 p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-cyan-100 italic">
                                    "Our platform doesn't 'think' the market
                                    will go up. It detects the cause (e.g.,
                                    Liquidity Asymmetry + Buy Aggression in
                                    Flow) and executes the effect (Buy Order).
                                    Everything is visible, traceable, and
                                    logical."
                                </p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong class="text-cyan-300"
                                    >Application:</strong
                                > Real-time dashboard showing the bot's "brain,"
                                allowing humans to validate machine logic.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Pillar 3: Event Sourcing -->
                <div
                    class="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">📼</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-orange-300 mb-2">
                                3. Event-Oriented Architecture (Event Sourcing)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                <strong class="text-orange-200"
                                    >The Concept:</strong
                                > System state (balance, position, signal) is ephemeral;
                                it's just the sum of all past events. The database
                                is an immutable log of facts.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-orange-500 p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-orange-100 italic">
                                    "We never delete data. If there's an error,
                                    we don't fix the database; we emit a
                                    compensation event. This means we can
                                    rebuild the system from scratch at any time
                                    by simply 'replaying the tape' of events.
                                    It's indestructible."
                                </p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong class="text-orange-300"
                                    >Application:</strong
                                > Instant disaster recovery, market replay for debugging,
                                and perfect accounting audit.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Pillar 4: Complex Event Processing -->
                <div
                    class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">⚡</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-green-300 mb-2">
                                4. The Complex Event Reactor (Generalist CEP)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                <strong class="text-green-200"
                                    >The Concept:</strong
                                > An agnostic engine that ingests raw signals, detects
                                complex patterns over time, and emits reactions.
                                This positions Ark Engine as a Tech Platform, not
                                just FinTech.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-green-500 p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-green-100 italic">
                                    "Today, the 'sensors' are crypto exchanges
                                    and the 'reaction' is buying Bitcoin.
                                    Tomorrow, sensors could be IoT thermostats
                                    and the reaction is shutting down a turbine,
                                    or bank transactions and the reaction is
                                    blocking fraud. The logical core is
                                    separated from the business domain."
                                </p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong class="text-green-300"
                                    >Application:</strong
                                > Horizontal scalability of Nexus Quant's business
                                model to other sectors (Logistics, Healthcare, Security).
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Pillar 5: Functional Determinism -->
                <div
                    class="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">λ</div>
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-indigo-300 mb-2">
                                5. Functional Determinism (Clojure)
                            </h4>
                            <p class="text-sm text-gray-300 mb-3">
                                <strong class="text-indigo-200"
                                    >The Concept:</strong
                                > Use of immutable data structures and pure functions.
                                Input A always generates Output B, without hidden
                                side effects. The language choice isn't aesthetic,
                                it's structural.
                            </p>
                            <div
                                class="bg-black/40 border-l-4 border-indigo-500 p-3 mb-3 rounded"
                            >
                                <p class="text-sm text-indigo-100 italic">
                                    "We eliminate entire classes of bugs common
                                    in financial systems (Race Conditions, State
                                    Mutability). Our system is mathematically
                                    verifiable and easy to test, which is
                                    critical when managing capital or risk."
                                </p>
                            </div>
                            <p class="text-xs text-gray-400">
                                <strong class="text-indigo-300"
                                    >Application:</strong
                                > Predictable behavior, easier debugging, and confidence
                                in production deployments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    /* Custom utility for precise absolute positioning if needed */
</style>
