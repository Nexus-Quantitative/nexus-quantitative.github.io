<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<section id="featured-research" class="py-24 px-4 bg-transparent">
    <div class="max-w-6xl mx-auto relative z-10">
        <!-- Section Title (h3 to keep single h1 and single h2 on landing page) -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
            <h3 class="text-xl font-mono text-accent pl-4 border-l-2 border-accent">
                {$t("research.section_title")}
            </h3>
            <span class="font-mono text-xs tracking-widest px-3 py-1 border border-[#00FF94]/35 bg-[#00FF94]/10 text-[#00FF94] rounded-sm">
                {$t("research.badge")}
            </span>
        </div>

        <div class="bg-black/70 backdrop-blur-md border border-[#00F0FF]/25 hover:border-[#00F0FF]/50 transition-all duration-300 rounded-sm p-6 md:p-10 space-y-8 shadow-[0_0_30px_rgba(0,240,255,0.06)]">
            <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
                <div class="space-y-4">
                    <div class="font-mono text-xs text-[#4CC9F0]/75 tracking-widest uppercase">
                        {$t("research.eyebrow")}
                    </div>
                    <h4 class="text-2xl md:text-3xl font-bold font-mono text-white leading-tight">
                        {$t("research.title")}
                    </h4>
                    <p class="font-sans text-base text-gray-300 leading-relaxed">
                        {$t("research.summary")}
                    </p>
                </div>

                <!-- 4 Key Quantitative Metrics -->
                <div class="grid grid-cols-2 gap-3 font-mono">
                    <div class="border border-[#00FF94]/30 bg-black/75 p-4 rounded-sm">
                        <div class="text-[10px] text-[#00FF94]/80 tracking-widest uppercase mb-1">
                            OOS CORE 4
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-[#00FF94] tabular-nums">+18.20%</div>
                        <div class="text-[11px] text-white/50 mt-1">Sharpe +5.34 · PF 6.31</div>
                    </div>
                    <div class="border border-rose-500/30 bg-black/75 p-4 rounded-sm">
                        <div class="text-[10px] text-rose-400/80 tracking-widest uppercase mb-1">
                            30D CASCADES
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-white tabular-nums">24 + 1</div>
                        <div class="text-[11px] text-white/50 mt-1">{$t("research.kpi_peak")}</div>
                    </div>
                    <div class="border border-[#00F0FF]/30 bg-black/75 p-4 rounded-sm">
                        <div class="text-[10px] text-[#00F0FF]/80 tracking-widest uppercase mb-1">
                            BOOT ARCHIVE
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-[#00F0FF] tabular-nums">279,783</div>
                        <div class="text-[11px] text-white/50 mt-1">1,061 {$t("research.kpi_symbols")}</div>
                    </div>
                    <div class="border border-white/15 bg-black/75 p-4 rounded-sm">
                        <div class="text-[10px] text-white/55 tracking-widest uppercase mb-1">
                            1M ENGINES
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-white tabular-nums">25 LIVE</div>
                        <div class="text-[11px] text-white/50 mt-1">4 Majors + 21 Alts F1</div>
                    </div>
                </div>
            </div>

            <!-- Action Row -->
            <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="font-mono text-xs text-white/45 tracking-wider">
                    {$t("research.meta_line")}
                </div>
                <a
                    href="#/relatorios"
                    class="group relative px-7 py-3 bg-transparent overflow-hidden border border-[#00F0FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] transition-all duration-300 text-center shrink-0"
                >
                    <div class="absolute inset-0 w-0 bg-[#00F0FF]/15 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-xs font-mono text-[#00F0FF] group-hover:text-white tracking-widest font-bold">
                        {$t("research.cta")}
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>
