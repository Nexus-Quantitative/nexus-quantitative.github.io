<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<section id="evolution" class="py-32 px-4 bg-transparent">
    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Title -->
        <h3
            class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"
        >
            {$t("evolution.title")}
        </h3>

        <!-- Timeline -->
        <div class="relative">
            <!-- Central Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div>

            <div class="space-y-12 md:space-y-24">
                <!-- Phase 1 -->
                <div class="relative flex flex-col md:flex-row items-center justify-between group">
                    <div class="md:w-[45%] mb-8 md:mb-0">
                        <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 transition-all duration-300 rounded-sm">
                            <div class="font-mono text-accent text-xs mb-2">{$t("evolution.phase1.period")}</div>
                            <h4 class="text-xl font-bold text-white mb-2 font-mono">{$t("evolution.phase1.name")}</h4>
                            <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider">{$t("evolution.phase1.tech")}</div>
                            <p class="text-secondary text-sm leading-relaxed">{$t("evolution.phase1.description")}</p>
                        </div>
                    </div>
                    
                    <!-- Marker -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform"></div>

                    <div class="md:w-[45%] hidden md:block"></div>
                </div>

                <!-- Phase 2 -->
                <div class="relative flex flex-col md:flex-row items-center justify-between group">
                    <div class="md:w-[45%] hidden md:block"></div>

                    <!-- Marker -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_#00F0FF]"></div>

                    <div class="md:w-[45%]">
                        <div class="bg-black/60 backdrop-blur-md border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/40 transition-all duration-300 rounded-sm">
                            <div class="font-mono text-[#00F0FF] text-xs mb-2">{$t("evolution.phase2.period")}</div>
                            <h4 class="text-xl font-bold text-white mb-2 font-mono">{$t("evolution.phase2.name")}</h4>
                            <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider">{$t("evolution.phase2.tech")}</div>
                            <p class="text-secondary text-sm leading-relaxed">{$t("evolution.phase2.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
