<script lang="ts">
    import { t } from "svelte-i18n";
    import { fade, fly } from "svelte/transition";
    import DualArchitecture from "./presentation/DualArchitecture.svelte";
    import DualDetails from "./presentation/DualDetails.svelte";
    import DataRefinery3D from "./presentation/DataRefinery3D.svelte";
    import ReactorCore from "./presentation/ReactorCore.svelte";
    import Convergence from "./presentation/Convergence.svelte";
    import MindsetObject from "./presentation/MindsetObject.svelte";

    // Icons
    const ICONS: Record<string, string> = {
        source: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>`,
        norm: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        audit: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        decision: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    };

    const slideClass =
        "min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";
</script>

<div class="w-full relative z-10 pointer-events-auto">
    <!-- SLIDE 1: HEADER / INTRO -->
    <section class={slideClass} in:fade>
        <div class="max-w-4xl w-full text-center space-y-8">
            <div
                class="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm tracking-widest mb-4"
            >
                CONFIDENTIAL // INTERVIEW CANDIDATE
            </div>
            <h1
                class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500"
            >
                {$t("presentation.title")}
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-400 font-light">
                {$t("presentation.subtitle")}
            </h2>
        </div>
    </section>

    <!-- SLIDE 2: HOOK (Text Only) -->
    <section class={slideClass}>
        <div
            class="max-w-3xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl relative"
        >
            <div
                class="absolute -top-3 -left-3 text-6xl text-cyan-500 font-serif"
            >
                "
            </div>
            <h3 class="text-xl text-cyan-400 font-mono mb-4 tracking-wider">
                01 // {$t("presentation.section1.title")}
            </h3>
            <p
                class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"
            >
                {$t("presentation.section1.text")}
            </p>
        </div>
    </section>

    <section
        class="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden bg-zinc-950"
    >
        <h1
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-zinc-900 select-none z-0 opacity-30 whitespace-nowrap"
        >
            BUILDER
        </h1>

        <div class="relative z-10 w-full max-w-6xl px-6">
            <div class="flex items-center gap-4 mb-12 opacity-80">
                <span class="text-orange-500 font-mono text-sm"
                    >02 // THE MINDSET</span
                >
                <div class="h-px bg-zinc-800 flex-1"></div>
            </div>

            <div class="grid md:grid-cols-5 gap-12 items-center">
                <div
                    class="md:col-span-2 space-y-8 z-20 relative pointer-events-none"
                >
                    <h2
                        class="text-4xl md:text-5xl font-bold leading-tight text-white"
                    >
                        Not just <br />
                        <span
                            class="text-zinc-500 line-through decoration-orange-500/50"
                            >executing tasks.</span
                        >
                    </h2>

                    <p
                        class="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 bg-zinc-950/50 backdrop-blur-md p-4 rounded-r-lg"
                    >
                        Building the <strong class="text-white font-medium"
                            >right tools</strong
                        > to solve the problem.
                    </p>

                    <div class="pt-4 pointer-events-auto">
                        <p
                            class="text-sm text-zinc-500 mb-2 font-mono uppercase tracking-widest"
                        >
                            The Evidence
                        </p>
                        <p
                            class="text-zinc-400 text-sm max-w-md leading-relaxed"
                        >
                            I built this interactive presentation platform from
                            scratch. <br />
                            Why? To demonstrate that I own the entire stack:
                            <span class="text-orange-400"
                                >From the complex backend logic represented by
                                the wireframe, to the polished user experience
                                you see materializing.</span
                            >
                        </p>
                    </div>
                </div>

                <div class="md:col-span-3 h-[500px] relative">
                    <MindsetObject />

                    <div
                        class="absolute bottom-4 right-4 text-right pointer-events-none z-30"
                    >
                        <span
                            class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950/80 px-2 py-1 rounded"
                        >
                            Interactive: Logic to Materialization
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SLIDE 3: MOLEQUE INTRO & ARCHITECTURE -->
    <section class={slideClass}>
        <div class="max-w-6xl w-full flex flex-col items-center gap-12">
            <div class="text-center max-w-3xl space-y-4">
                <h3 class="text-xl text-purple-400 font-mono tracking-wider">
                    02 // {$t("presentation.section2.title")}
                </h3>
                <div class="text-sm text-gray-500 uppercase tracking-widest">
                    {$t("presentation.section2.subtitle")}
                </div>
                <p class="text-lg text-gray-200 leading-relaxed font-light">
                    {$t("presentation.section2.intro")}
                </p>
            </div>

            <!-- The Visuals -->
            <div class="w-full">
                <DualArchitecture />
            </div>
        </div>
    </section>

    <!-- SLIDE 4: DEEP DIVE & DATA FLOW (Combined) -->
    <section class={slideClass}>
        <div class="max-w-6xl w-full flex flex-col items-center gap-12">
            <h3
                class="text-lg text-purple-400/50 font-mono tracking-wider w-full text-center"
            >
                02.b // DEEP DIVE & DATA FLOW
            </h3>
            <!-- Row 2: 3D Visualization -->
            <div class="w-full">
                <DataRefinery3D />
            </div>
            <!-- Row 1: Architecture Details -->
            <div class="w-full">
                <DualDetails />
            </div>
        </div>
    </section>

    <!-- SLIDE 6: NEXUS QUANT (Reactor Core) -->
    <section class={slideClass}>
        <div class="max-w-6xl w-full flex flex-col gap-12">
            <div class="text-center max-w-4xl mx-auto space-y-6">
                <h3 class="text-xl text-green-400 font-mono tracking-wider">
                    03 // {$t("presentation.section3.title")}
                </h3>
                <div
                    class="text-sm text-gray-500 uppercase tracking-widest mb-2"
                >
                    {$t("presentation.section3.role")}
                </div>

                <!-- NEW: Subtitle connecting Trading with Healthcare -->
                <div
                    class="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-green-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"
                >
                    <p class="text-lg text-cyan-300 font-medium mb-2">
                        {@html $t("presentation.section3.subtitle")}
                    </p>
                    <p class="text-sm text-gray-300 leading-relaxed">
                        {$t("presentation.section3.subtitle2")}
                    </p>
                </div>

                <p class="text-lg text-gray-200 leading-relaxed font-light">
                    {$t("presentation.section3.intro")}
                </p>

                <p class="text-lg text-gray-200 leading-relaxed font-light">
                    {$t("presentation.section3.intro2")}
                </p>
            </div>

            <div class="w-full">
                <ReactorCore />
            </div>
        </div>
    </section>

    <!-- SLIDE 7: CONVERGENCE (Grid) -->
    <section class={slideClass}>
        <Convergence />
    </section>

    <!-- SLIDE 8: OUTRO -->
    <section class={slideClass}>
        <!-- Closing Statement -->

        <!-- Contact Section -->
        <div class="max-w-2xl w-full text-center space-y-8">
            <h3 class="text-xl text-white font-mono tracking-wider">
                {$t("presentation.section5.title")}
            </h3>
            <p
                class="text-2xl md:text-3xl font-light text-gray-100 leading-snug"
            >
                {$t("presentation.section5.text")}
            </p>

            <div
                class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
            >
                <a
                    href="https://linkedin.com/in/patrickcmserrano"
                    target="_blank"
                    class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                    LINKEDIN
                </a>
                <a
                    href="https://github.com/patrickcmserrano"
                    target="_blank"
                    class="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded font-bold tracking-wide transition-all"
                >
                    GITHUB
                </a>
            </div>
        </div>
    </section>

    <div class="h-12"></div>
</div>

<style>
    :global(html) {
        font-size: 150%;
        scroll-snap-type: y mandatory;
    }
</style>
