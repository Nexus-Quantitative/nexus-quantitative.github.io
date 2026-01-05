<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

{#if visible}
    <div
        class="relative w-full py-12 flex flex-col items-center justify-center gap-6 font-mono text-xs md:text-sm select-none pointer-events-none"
    >
        <!-- Level 1: External Chaos -->
        <div
            class="grid grid-cols-3 gap-4 w-full max-w-3xl"
            in:fly={{ y: -20, duration: 1000 }}
        >
            <div
                class="bg-red-950/30 border border-red-500/40 p-3 rounded text-center text-red-300/80 shadow-[0_0_15px_rgba(239,68,68,0.1)] backdrop-blur-sm"
            >
                CIELO
            </div>
            <div
                class="bg-red-950/30 border border-red-500/40 p-3 rounded text-center text-red-300/80 shadow-[0_0_15px_rgba(239,68,68,0.1)] backdrop-blur-sm"
            >
                PAGAR.ME
            </div>
            <div
                class="bg-red-950/30 border border-red-500/40 p-3 rounded text-center text-red-300/80 shadow-[0_0_15px_rgba(239,68,68,0.1)] backdrop-blur-sm"
            >
                GETNET
            </div>
        </div>

        <div
            class="h-8 w-px bg-gradient-to-b from-red-500/50 to-transparent"
        ></div>

        <!-- Level 2: The Filter -->
        <div
            class="w-full max-w-xl"
            in:fly={{ y: 20, duration: 1000, delay: 300 }}
        >
            <div
                class="relative bg-cyan-950/30 border border-cyan-500/60 p-6 rounded-lg text-center shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-md overflow-hidden"
            >
                <div class="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
                <h3
                    class="text-cyan-400 text-lg font-bold tracking-widest mb-1"
                >
                    MALLI
                </h3>
                <p
                    class="text-cyan-200/50 text-[10px] uppercase tracking-wider"
                >
                    Edge Normalization & Contract Enforcement
                </p>
            </div>
        </div>

        <div
            class="h-8 w-px bg-gradient-to-b from-cyan-500/50 to-purple-500/50"
        ></div>

        <!-- Level 3: The Truth -->
        <div
            class="w-full max-w-xl"
            in:fly={{ y: 20, duration: 1000, delay: 600 }}
        >
            <div
                class="bg-purple-950/30 border border-purple-500/60 p-6 rounded-lg text-center shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-md"
            >
                <h3
                    class="text-purple-400 text-lg font-bold tracking-widest mb-1"
                >
                    DATOMIC
                </h3>
                <p
                    class="text-purple-200/50 text-[10px] uppercase tracking-wider"
                >
                    Immutable Ledger of Facts
                </p>
            </div>
        </div>

        <div
            class="grid grid-cols-2 gap-8 w-full max-w-2xl mt-2"
            in:fade={{ duration: 1000, delay: 900 }}
        >
            <!-- Branch Left: Processing -->
            <div class="flex flex-col items-center">
                <div class="h-8 w-px bg-purple-500/30 mb-2"></div>
                <div
                    class="w-full border border-yellow-500/40 bg-yellow-950/20 p-4 rounded text-center"
                >
                    <span class="text-yellow-400 font-bold">ONYX</span>
                    <div class="text-yellow-200/40 text-[10px] mt-1">
                        Event Processing
                    </div>
                </div>
            </div>

            <!-- Branch Right: Read Models -->
            <div class="flex flex-col items-center">
                <div class="h-8 w-px bg-purple-500/30 mb-2"></div>
                <div
                    class="w-full border border-green-500/40 bg-green-950/20 p-4 rounded text-center"
                >
                    <span class="text-green-400 font-bold">DASHBOARDS</span>
                    <div class="text-green-200/40 text-[10px] mt-1">
                        Real-time Intel
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
