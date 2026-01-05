<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<div
    class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm p-4"
>
    <!-- 1. LEFT: CHAOS (Ingestion) -->
    <div
        class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"
    >
        <div
            class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"
        ></div>
        <h3 class="text-orange-400 font-bold tracking-widest text-lg">
            {$t("presentation.section2.part1.title")}
        </h3>

        <div class="text-gray-300">
            <div class="text-orange-200/80 italic leading-relaxed">
                {$t("presentation.section2.part1.intro")}
            </div>
        </div>
    </div>

    <!-- 2. CENTER: REFINERY (Processing) -->
    <div
        class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"
    >
        <div
            class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"
        ></div>
        <h3 class="text-purple-400 font-bold tracking-widest text-lg">
            {$t("presentation.section2.part2.title")}
        </h3>

        <div class="text-gray-300">
            <div class="text-purple-200/80 italic leading-relaxed">
                {$t("presentation.section2.part2.intro")}
            </div>
        </div>
    </div>

    <!-- 3. RIGHT: VALUE (Intelligence) -->
    <div
        class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"
    >
        <div
            class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent"
        ></div>
        <h3 class="text-cyan-400 font-bold tracking-widest text-lg">
            {$t("presentation.section2.part3.title")}
        </h3>

        <div class="text-gray-300">
            <div class="text-cyan-200/80 italic leading-relaxed">
                {$t("presentation.section2.part3.intro")}
            </div>
        </div>
    </div>
</div>
