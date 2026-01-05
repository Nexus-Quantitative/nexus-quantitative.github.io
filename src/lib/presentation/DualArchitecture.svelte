<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";

    let visible = false;
    let hoveredLayer: number | null = null;

    onMount(() => (visible = true));
</script>

{#if visible}
    <div
        class="w-full flex flex-col items-center gap-0 font-mono text-sm select-none pointer-events-none p-4"
    >
        <!-- TOP LAYER: DOMAINS (Branches) -->

        <div
            class="flex flex-col md:flex-row gap-8 w-full justify-center items-start mb-12 text-zinc-400 max-w-6xl px-4"
            in:fade={{ duration: 800, delay: 200 }}
        >
            <div class="flex-1">
                <p class="hint leading-relaxed">
                    Initially, we built MPMS. The domain was E-commerce. We
                    built complex modules for Product Catalog Management (PCM)
                    and logistics integrations with VTEX. But when the business
                    strategy shifted away from Marketplace orchestration, we
                    didn't throw the code away. We pivoted.
                </p>
            </div>
            <div class="flex-1">
                <p class="hint leading-relaxed">
                    We leveraged the same Event-Driven infrastructure to build
                    UBLE. The domain shifted to Payment Intelligence. Instead of
                    routing deliveries, we started ingesting massive transaction
                    logs from Getnet, Cielo, and ClearSale. I built new modules
                    to feed Superset dashboards, allowing clients to visualize
                    and recover lost revenue. This proves I can build
                    architectures that are decoupled enough to survive a
                    complete business pivot.
                </p>
            </div>
        </div>

        <div
            class="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch min-h-[250px] relative z-20"
        >
            <!-- LEFT BRANCH: MPMS (Past) -->

            <div
                class="flex-1 bg-zinc-900 border border-cyan-500/50 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                in:fly={{ x: -20, duration: 1000 }}
            >
                <!-- Decoration -->
                <div class="absolute top-0 right-0 p-2 text-6xl rotate-12">
                    📦
                </div>
                <div
                    class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-500"
                ></div>

                <div class="border-b border-zinc-700 pb-2 mb-2">
                    <h3 class="text-gray-400 font-bold text-lg">
                        DOMAIN: E-COMMERCE
                    </h3>
                    <span
                        class="text-xs text-orange-500 uppercase tracking-widest"
                        >[MPMS]</span
                    >
                    <p class="text-[10px] text-gray-500 mt-1">
                        Marketplace & Logistics
                    </p>
                </div>

                <!-- Modules -->
                <div class="flex flex-col gap-2">
                    <div
                        class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30"
                    >
                        project: product-catalog
                    </div>
                    <div
                        class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30"
                    >
                        component: vtex-adapter
                    </div>
                    <div
                        class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30"
                    >
                        component: logistics-routing
                    </div>
                </div>
            </div>

            <!-- RIGHT BRANCH: UBLE (Present) -->
            <div
                class="flex-1 bg-zinc-900 border border-cyan-500/50 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                in:fly={{ x: 20, duration: 1000, delay: 200 }}
            >
                <!-- Decoration -->
                <div class="absolute top-0 right-0 p-2 text-6xl rotate-12">
                    📊
                </div>
                <div
                    class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-green-500"
                ></div>

                <div class="border-b border-cyan-500/30 pb-2 mb-2">
                    <h3 class="text-cyan-400 font-bold text-lg">
                        DOMAIN: PAYMENTS INTELLIGENCE
                    </h3>
                    <span
                        class="text-xs text-cyan-400 uppercase tracking-widest"
                        >[UBLE]</span
                    >
                    <p class="text-[10px] text-cyan-300/70 mt-1">
                        Recovery & Insights
                    </p>
                </div>

                <!-- Modules -->
                <div class="flex flex-col gap-2">
                    <div
                        class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30"
                    >
                        component: payment-gateways
                    </div>
                    <div
                        class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30"
                    >
                        component: fraud-analysis
                    </div>
                    <div
                        class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30"
                    >
                        project: intelligence-dashboard
                    </div>
                </div>
            </div>
        </div>

        <!-- CONNECTOR LAYER (Roots) -->
        <div
            class="relative h-12 w-full max-w-2xl z-10"
            in:fade={{ duration: 1000, delay: 500 }}
        >
            <!-- Vertical Lines -->
            <div
                class="absolute left-[25%] top-0 h-full w-px border-l border-dashed border-zinc-600"
            ></div>
            <div
                class="absolute right-[25%] top-0 h-full w-px border-l border-dashed border-cyan-500/50"
            ></div>

            <!-- Horizontal Joiner (Brackets style) -->
            <div
                class="absolute bottom-0 left-[25%] right-[25%] h-1/2 border-t border-l border-r border-zinc-700 separate-colors"
            ></div>
            <!-- Note: visual hack for separate colors would be complex css, making simpler grey connector for now -->
            <div
                class="absolute bottom-0 left-[25%] right-[25%] h-4 border-t border-l border-r border-zinc-600 rounded-t-xl"
            ></div>
            <!-- Central Stem down to base -->
            <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-px bg-zinc-600"
            ></div>
        </div>

        <p class="hint max-w-2xl text-center my-10 leading-relaxed">
            This diagram represents the Polylith Architecture I implemented. It
            is divided into three logical layers: Entry Points (Bases), Shared
            Infrastructure, and Domain Logic. This separation is exactly what
            allowed us to pivot from E-commerce to Intelligence without
            rewriting the system.
        </p>

        <!-- BOTTOM LAYER: FOUNDATION (Base) -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="w-full max-w-3xl bg-zinc-950 border-2 border-orange-500/30 rounded-xl p-8 flex flex-col items-center gap-8 shadow-[0_0_50px_rgba(249,115,22,0.1)] z-20 relative pointer-events-auto"
            in:fly={{ y: 20, duration: 1000, delay: 400 }}
        >
            <div class="text-center">
                <h3
                    class="text-orange-400 font-bold text-2xl tracking-[0.2em] mb-1"
                >
                    POLYLITH ARCHITECTURE
                </h3>
                <div class="flex items-center justify-center gap-2">
                    <span class="h-px w-8 bg-orange-500/30"></span>
                    <span
                        class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold"
                    >
                        The Payment Engine
                    </span>
                    <span class="h-px w-8 bg-orange-500/30"></span>
                </div>
            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div
                class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-orange-500/5 relative"
                on:mouseenter={() => (hoveredLayer = 1)}
                on:mouseleave={() => (hoveredLayer = null)}
            >
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span
                        class="text-[10px] uppercase tracking-widest text-orange-400 font-bold"
                        >Bases (Entry Points)</span
                    >
                    <span
                        class="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent"
                    ></span>
                </div>

                <div class="grid grid-cols-3 gap-3">
                    <div
                        class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"
                    >
                        <span class="text-xs text-orange-200 font-bold block"
                            >base: http-api</span
                        >
                        <span
                            class="text-[9px] text-orange-400/60 uppercase mt-1"
                            >REST Interface</span
                        >
                    </div>

                    <div
                        class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"
                    >
                        <span class="text-xs text-orange-200 font-bold block"
                            >base: integrant</span
                        >
                        <span
                            class="text-[9px] text-orange-400/60 uppercase mt-1"
                            >Lifecycle / DI</span
                        >
                    </div>

                    <div
                        class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"
                    >
                        <span class="text-xs text-orange-200 font-bold block"
                            >base: onyx-peer</span
                        >
                        <span
                            class="text-[9px] text-orange-400/60 uppercase mt-1"
                            >Event Consumer</span
                        >
                    </div>
                </div>

                {#if hoveredLayer === 1}
                    <div
                        class="absolute left-0 bottom-full w-full bg-black/95 border border-orange-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"
                        in:fade={{ duration: 200 }}
                    >
                        <h4
                            class="text-orange-400 font-bold mb-2 text-xs uppercase tracking-widest"
                        >
                            LAYER 1: BASES (ENTRY POINTS)
                        </h4>
                        <p class="text-xs text-gray-300 leading-relaxed mb-2">
                            "At the top, we have the Bases. In Polylith, these
                            are the only places that interact with the outside
                            world."
                        </p>
                        <ul
                            class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"
                        >
                            <li>
                                <strong class="text-orange-200"
                                    >base: integrant:</strong
                                > The brain of our boot process. Declarative formatting
                                using EDN configuration. Handles dependency injection,
                                enabling REPL restarts in milliseconds.
                            </li>
                            <li>
                                <strong class="text-orange-200"
                                    >base: http-api:</strong
                                > Exposes functionality via REST. Thin and dumb—routes
                                requests to components below.
                            </li>
                            <li>
                                <strong class="text-orange-200"
                                    >base: onyx-peer:</strong
                                > The heavy lifter. A background worker consuming
                                events from Datomic logs for async processing.
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div
                class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-zinc-800/30 relative"
                on:mouseenter={() => (hoveredLayer = 2)}
                on:mouseleave={() => (hoveredLayer = null)}
            >
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                    <span
                        class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold"
                        >Infrastructure Components</span
                    >
                    <span
                        class="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"
                    ></span>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    <div
                        class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-zinc-500 block mb-0.5"
                            >Persistence</span
                        >
                        <span class="text-xs text-zinc-300 font-medium"
                            >datomic-peer</span
                        >
                    </div>
                    <div
                        class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-zinc-500 block mb-0.5"
                            >Security</span
                        >
                        <span class="text-xs text-zinc-300 font-medium"
                            >auth-provider</span
                        >
                    </div>
                    <div
                        class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-zinc-500 block mb-0.5"
                            >Observability</span
                        >
                        <span class="text-xs text-zinc-300 font-medium"
                            >log-service</span
                        >
                    </div>
                    <div
                        class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-zinc-500 block mb-0.5"
                            >Workflow</span
                        >
                        <span class="text-xs text-zinc-300 font-medium"
                            >workflow-orch</span
                        >
                    </div>
                </div>

                {#if hoveredLayer === 2}
                    <div
                        class="absolute left-0 bottom-full w-full bg-black/95 border border-zinc-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"
                        in:fade={{ duration: 200 }}
                    >
                        <h4
                            class="text-zinc-300 font-bold mb-2 text-xs uppercase tracking-widest"
                        >
                            LAYER 2: INFRASTRUCTURE CORE
                        </h4>
                        <p class="text-xs text-gray-300 leading-relaxed mb-2">
                            "In the middle, we have the Infrastructure Core.
                            These components are domain-agnostic. Whether we
                            were handling Marketplace Inventory (MPMS) or
                            Payment Intelligence (UBLE), this layer remained
                            stable."
                        </p>
                        <ul
                            class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"
                        >
                            <li>
                                <strong class="text-zinc-200"
                                    >datomic-peer:</strong
                                > Connects to our immutable ledger. Preserves every
                                state change in a timeline for financial and clinical
                                auditability.
                            </li>
                            <li>
                                <strong class="text-zinc-200"
                                    >auth-provider:</strong
                                > Centralized security with interceptors for multiple
                                external actors (VTEX, Gateways).
                            </li>
                            <li>
                                <strong class="text-zinc-200"
                                    >workflow-orch:</strong
                                > 'Sinatra' - A state machine engine for orchestrating
                                multi-step flows like refund authorizations.
                            </li>
                            <li>
                                <strong class="text-zinc-200"
                                    >log-service:</strong
                                > Full observability, sending structured logs to
                                the cloud.
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div
                class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-blue-900/20 relative"
                on:mouseenter={() => (hoveredLayer = 3)}
                on:mouseleave={() => (hoveredLayer = null)}
            >
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                    <span
                        class="text-[10px] uppercase tracking-widest text-blue-300/70 font-bold"
                        >Domain & Intelligence</span
                    >
                    <span
                        class="h-px flex-1 bg-gradient-to-r from-blue-900/30 to-transparent"
                    ></span>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div
                        class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-blue-400/60 block mb-0.5"
                            >Integration</span
                        >
                        <span class="text-xs text-blue-200 font-medium"
                            >payment-gateways</span
                        >
                    </div>
                    <div
                        class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-blue-400/60 block mb-0.5"
                            >Risk Engine</span
                        >
                        <span class="text-xs text-blue-200 font-medium"
                            >fraud-analysis</span
                        >
                    </div>
                    <div
                        class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-blue-400/60 block mb-0.5"
                            >Data Science</span
                        >
                        <span class="text-xs text-blue-200 font-medium"
                            >oz-visualization</span
                        >
                    </div>
                    <div
                        class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"
                    >
                        <span class="text-[9px] text-blue-400/60 block mb-0.5"
                            >Analytics UI</span
                        >
                        <span class="text-xs text-blue-200 font-medium"
                            >superset-embed</span
                        >
                    </div>
                </div>

                {#if hoveredLayer === 3}
                    <div
                        class="absolute left-0 bottom-full w-full bg-black/95 border border-blue-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"
                        in:fade={{ duration: 200 }}
                    >
                        <h4
                            class="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest"
                        >
                            LAYER 3: DOMAIN & INTELLIGENCE
                        </h4>
                        <p class="text-xs text-gray-300 leading-relaxed mb-2">
                            "Finally, at the bottom, we have the Domain Layer.
                            This is where the pivot happened."
                        </p>
                        <ul
                            class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"
                        >
                            <li>
                                <strong class="text-blue-200"
                                    >payment-gateways:</strong
                                > Normalizes the chaos. Adapters for Cielo, Getnet,
                                Pagar.me converting external formats to internal
                                schemas.
                            </li>
                            <li>
                                <strong class="text-blue-200"
                                    >fraud-analysis:</strong
                                > Enriches data with risk scores via ClearSale and
                                Unico connections.
                            </li>
                            <li>
                                <strong class="text-blue-200"
                                    >oz-visualization:</strong
                                > The 'Last Mile' of Intelligence. Scientific visualizations
                                (Vega-Lite) generated from Clojure data.
                            </li>
                            <li>
                                <strong class="text-blue-200"
                                    >superset-embed:</strong
                                > Real-time Superset dashboards integrated directly
                                into the frontend.
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>

            <div
                class="text-[10px] text-zinc-600 italic mt-2 opacity-50 border-t border-zinc-900 w-full pt-4 text-center"
            >
                "Decoupled architecture enabling rapid pivots from E-commerce to
                Intelligence"
            </div>
        </div>
        <p class="hint mt-12 text-center text-xs tracking-widest uppercase">
            This proves I can build architectures that are decoupled enough to
            survive a complete business pivot.
        </p>
    </div>
{/if}

<style>
    .hint {
        color: silver;
        opacity: 0.8;
    }
</style>
