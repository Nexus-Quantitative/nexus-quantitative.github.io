<script lang="ts">
    import { t } from "svelte-i18n";
    import { ArrowLeft, Zap, Share2, Cpu, Monitor } from "@lucide/svelte";
</script>

<div class="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black p-8 md:p-16">
    <!-- Back Button -->
    <a href="#/" class="inline-flex items-center gap-2 text-accent font-mono mb-12 hover:opacity-70 transition-opacity">
        <ArrowLeft size={16} />
        [ BACK TO TERMINAL ]
    </a>

    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <header class="mb-16">
            <h1 class="text-4xl md:text-6xl font-bold font-mono mb-4 text-white uppercase tracking-tighter">
                {$t("arkStreams.title")}
            </h1>
            <p class="text-xl text-accent font-mono mb-8 opacity-80">
                {$t("arkStreams.subtitle")}
            </p>
            <div class="h-[1px] w-full bg-white/10 mb-8"></div>
            <p class="text-secondary leading-relaxed text-lg max-w-2xl">
                {$t("arkStreams.intro")}
            </p>
        </header>

        <!-- Technical Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <!-- Transition -->
            <div class="space-y-4">
                <div class="flex items-center gap-3 text-accent">
                    <Zap size={20} />
                    <h3 class="font-mono text-lg font-bold uppercase tracking-widest">
                        {$t("arkStreams.sections.transition.title")}
                    </h3>
                </div>
                <p class="text-secondary text-sm leading-relaxed">
                    {$t("arkStreams.sections.transition.text")}
                </p>
            </div>

            <!-- NATS -->
            <div class="space-y-4">
                <div class="flex items-center gap-3 text-accent">
                    <Share2 size={20} />
                    <h3 class="font-mono text-lg font-bold uppercase tracking-widest">
                        {$t("arkStreams.sections.nats.title")}
                    </h3>
                </div>
                <p class="text-secondary text-sm leading-relaxed">
                    {$t("arkStreams.sections.nats.text")}
                </p>
            </div>

            <!-- Efficiency -->
            <div class="space-y-4">
                <div class="flex items-center gap-3 text-accent">
                    <Cpu size={20} />
                    <h3 class="font-mono text-lg font-bold uppercase tracking-widest">
                        {$t("arkStreams.sections.efficiency.title")}
                    </h3>
                </div>
                <p class="text-secondary text-sm leading-relaxed">
                    {$t("arkStreams.sections.efficiency.text")}
                </p>
            </div>

            <!-- Terminal -->
            <div class="space-y-4">
                <div class="flex items-center gap-3 text-accent">
                    <Monitor size={20} />
                    <h3 class="font-mono text-lg font-bold uppercase tracking-widest">
                        {$t("arkStreams.sections.terminal.title")}
                    </h3>
                </div>
                <p class="text-secondary text-sm leading-relaxed">
                    {$t("arkStreams.sections.terminal.text")}
                </p>
            </div>
        </div>

        <!-- Conclusion -->
        <footer class="border-t border-white/10 pt-12 text-center">
            <p class="text-2xl font-mono text-white mb-4 italic opacity-90">
                "{$t("arkStreams.conclusion")}"
            </p>
            <div class="flex justify-center gap-4 mt-12 opacity-50 text-[10px] font-mono tracking-widest uppercase">
                <span>Memory: Efficient</span>
                <span>•</span>
                <span>Latency: Low</span>
                <span>•</span>
                <span>Stack: Go/NATS/Svelte</span>
            </div>
        </footer>
    </div>
</div>

<style>
    /* Add subtle grid background */
    :global(body) {
        background-image: 
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
        background-size: 40px 40px;
    }
</style>
