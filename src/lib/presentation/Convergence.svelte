<script lang="ts">
    import { t } from "svelte-i18n";

    export let baseKey = "presentation";

    // Icons mapped to keys
    const ICONS: Record<string, string> = {
        source: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>`,
        norm: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        audit: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        decision: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
        runtime: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
        messaging: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
        ui: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
        deployment: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
    };

    type ComparisonRow = {
        fintech: { title: string; detail: string };
        healthcare: { title: string; detail: string };
    };

    $: headers = $t(`${baseKey}.section4.headers`) as unknown as string[];
    $: rows = $t(`${baseKey}.section4.rows`) as unknown as Record<
        string,
        ComparisonRow
    >;
</script>

<div class="max-w-6xl w-full space-y-12">
    <!-- Header -->
    <div class="text-center space-y-4">
        <h3 class="text-xl text-accent font-mono tracking-wider">
            04 // {$t(`${baseKey}.section4.title`)}
        </h3>
        <h4 class="text-2xl md:text-3xl font-bold text-white italic">
            {$t(`${baseKey}.section4.subtitle`)}
        </h4>
        <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div>
    </div>
    <div
        class="bg-gradient-to-r from-accent/20 to-purple-900/20 border-l-4 border-accent p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-accent/10 mb-12"
    >
        <p
            class="text-xl md:text-2xl text-white font-light leading-relaxed italic text-center"
        >
            {$t(`${baseKey}.section4.closing`)}
        </p>
    </div>


    <!-- Comparison Table -->
    <div
        class="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
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
