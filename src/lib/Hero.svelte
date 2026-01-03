<script lang="ts">
    // Hero Section
    const scrollToPhilosophy = () => {
        document
            .getElementById("philosophy")
            ?.scrollIntoView({ behavior: "smooth" });
    };
</script>

<section
    id="hero"
    class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"
>
    <!-- Status Badge (Desktop) -->
    <div
        class="hidden md:flex absolute top-8 right-8 items-center gap-2 font-mono text-xs text-accent opacity-90 animate-pulse-glow"
    >
        <div class="w-2 h-2 rounded-full bg-accent"></div>
        <span>SYSTEMS OPERATIONAL</span>
    </div>

    <!-- Status Badge (Mobile) -->
    <div
        class="md:hidden absolute top-8 flex items-center gap-2 font-mono text-[10px] text-accent opacity-90 animate-pulse-glow"
    >
        <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
        <span>SYSTEMS OPERATIONAL</span>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <!-- Pre-Header -->
        <div
            class="text-accent font-mono text-xs md:text-sm tracking-widest mb-6 opacity-80"
        >
            ● SYSTEMS OPERATIONAL
        </div>

        <!-- Headline -->
        <h1
            class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-white leading-none"
        >
            NEXUS QUANT
        </h1>

        <!-- Sub-headline -->
        <h2
            class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"
        >
            Proprietary Quantitative Research &<br />Automated Decision Systems.
        </h2>

        <!-- CTA -->
        <button
            on:click={scrollToPhilosophy}
            class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent/50 transition-all duration-300"
        >
            <div
                class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"
            ></div>
            <span
                class="relative text-xs font-mono text-white group-hover:text-accent tracking-wider"
            >
                [ VIEW PHILOSOPHY ]
            </span>
        </button>
    </div>
</section>
