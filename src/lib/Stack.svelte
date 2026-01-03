<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<section id="stack" class="py-32 px-4 bg-transparent">
    <div class="max-w-6xl mx-auto">
        <!-- Title -->
        <h3
            class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"
        >
            {$t("stack.title")}
        </h3>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- CARD 01: RESEARCH LAB -->
            <div
                class="bg-white/[0.03] border border-white/10 p-8 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"
            >
                <div
                    class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"
                >
                    <span>[ PYTHON ]</span>
                </div>

                <h4 class="text-2xl font-bold mb-4 text-white font-mono">
                    {$t("stack.card1.title")}
                </h4>

                <p
                    class="text-secondary text-sm mb-8 leading-relaxed flex-grow"
                >
                    {$t("stack.card1.text")}
                </p>

                <div
                    class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"
                >
                    <span class="border border-white/10 px-2 py-1">Python</span>
                    <span class="border border-white/10 px-2 py-1">Pandas</span>
                    <span class="border border-white/10 px-2 py-1"
                        >Freqtrade</span
                    >
                    <span class="border border-white/10 px-2 py-1">SciPy</span>
                </div>
            </div>

            <!-- CARD 02: ARK ENGINE -->
            <div
                class="bg-white/[0.03] border border-white/10 p-8 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"
            >
                <div
                    class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"
                >
                    <span>[ CLOJURE / JVM ]</span>
                </div>

                <h4 class="text-2xl font-bold mb-4 text-white font-mono">
                    {$t("stack.card2.title")}
                </h4>

                <p
                    class="text-secondary text-sm mb-8 leading-relaxed flex-grow"
                >
                    {$t("stack.card2.text")}
                </p>

                <div
                    class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"
                >
                    <span class="border border-white/10 px-2 py-1">Clojure</span
                    >
                    <span class="border border-white/10 px-2 py-1">EDA</span>
                    <span class="border border-white/10 px-2 py-1"
                        >Integrant</span
                    >
                    <span class="border border-white/10 px-2 py-1">AWS</span>
                </div>
            </div>

            <!-- CARD 03: STATE & AUDIT -->
            <div
                class="bg-white/[0.03] border border-white/10 p-8 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"
            >
                <div
                    class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"
                >
                    <span>[ DATOMIC / XTDB / MALLI ]</span>
                </div>

                <h4 class="text-2xl font-bold mb-4 text-white font-mono">
                    {$t("stack.card3.title")}
                </h4>

                <p
                    class="text-secondary text-sm mb-8 leading-relaxed flex-grow"
                >
                    {$t("stack.card3.text")}
                </p>

                <div
                    class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"
                >
                    <span class="border border-white/10 px-2 py-1">Datomic</span
                    >
                    <span class="border border-white/10 px-2 py-1">XTDB</span>
                    <span class="border border-white/10 px-2 py-1">Malli</span>
                    <span class="border border-white/10 px-2 py-1"
                        >Compliance</span
                    >
                </div>
            </div>
        </div>
    </div>
</section>
