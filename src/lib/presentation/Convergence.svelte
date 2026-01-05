<script lang="ts">
    import { t } from "svelte-i18n";

    // Icons mapped to keys
    const ICONS: Record<string, string> = {
        source: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>`,
        norm: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        audit: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        decision: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    };

    type ComparisonRow = {
        fintech: { title: string; detail: string };
        healthcare: { title: string; detail: string };
    };

    $: headers = $t("presentation.section4.headers") as unknown as string[];
    $: rows = $t("presentation.section4.rows") as unknown as Record<
        string,
        ComparisonRow
    >;
</script>

<div class="max-w-6xl w-full space-y-12">
    <!-- Header -->
    <div class="text-center space-y-4">
        <h3 class="text-xl text-indigo-400 font-mono tracking-wider">
            04 // {$t("presentation.section4.title")}
        </h3>
        <h4 class="text-2xl md:text-3xl font-bold text-white italic">
            {$t("presentation.section4.subtitle")}
        </h4>
        <div class="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
    </div>
    <div
        class="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-l-4 border-indigo-500 p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-indigo-900/20 mb-12"
    >
        <p
            class="text-xl md:text-2xl text-indigo-100 font-light leading-relaxed italic text-center"
        >
            {$t("presentation.section4.closing")}
        </p>
    </div>

    <!-- Comparison Table -->
    <div
        class="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
    >
        <!-- Table Header -->
        <div class="grid grid-cols-2 divide-x divide-white/10 bg-white/5">
            {#each headers as header}
                <div
                    class="p-6 text-center text-indigo-300 font-mono text-sm md:text-base tracking-widest uppercase"
                >
                    {header}
                </div>
            {/each}
        </div>

        <!-- Table Body -->
        <div class="divide-y divide-white/5">
            {#each Object.entries(rows) as [key, row]}
                <div
                    class="grid grid-cols-2 divide-x divide-white/5 hover:bg-white/5 transition-colors group"
                >
                    <!-- Fintech Column -->
                    <div
                        class="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center text-right md:text-left justify-end md:justify-start"
                    >
                        <div
                            class="hidden md:block text-indigo-500/50 group-hover:text-indigo-400 transition-colors"
                        >
                            {@html ICONS[key]}
                        </div>
                        <div class="flex-1">
                            <div class="text-gray-200 font-bold text-lg">
                                {row.fintech.title}
                            </div>
                            <div class="text-gray-500 text-sm font-mono mt-1">
                                {row.fintech.detail}
                            </div>
                        </div>
                    </div>

                    <!-- Healthcare Column -->
                    <div
                        class="p-6 flex flex-col md:flex-row gap-4 items-end md:items-center text-left"
                    >
                        <div
                            class="md:hidden text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-2"
                        >
                            {@html ICONS[key]}
                        </div>
                        <div class="flex-1">
                            <div class="text-white font-bold text-lg">
                                {row.healthcare.title}
                            </div>
                            <div
                                class="text-indigo-400/80 text-sm font-mono mt-1"
                            >
                                {row.healthcare.detail}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
