<script lang="ts">
    // Hero Section
</script>

<section
    id="hero"
    class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden pt-32"
>
    <!-- Status Badge (Desktop) -->
    <div
        class="hidden md:flex absolute top-8 right-8 items-center gap-2 font-mono text-xs text-accent opacity-90 animate-pulse-glow"
    >
        <div class="w-2 h-2 rounded-full bg-accent"></div>
        <span>SYSTEMS OPERATIONAL | UPTIME: 99.9%</span>
    </div>

    <!-- Status Badge (Mobile) -->
    <div
        class="md:hidden absolute top-8 flex items-center gap-2 font-mono text-[10px] text-accent opacity-90 animate-pulse-glow"
    >
        <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
        <span>SYSTEMS ACTIVE</span>
    </div>

    <!-- Geometric Decos (Background) -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
        <div
            class="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"
        ></div>
        <div
            class="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/10 rounded-full"
        ></div>
    </div>

    <!-- Logo (Geometric N) -->
    <div class="mb-12 relative group cursor-default">
        <div
            class="absolute inset-0 bg-accent blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
        ></div>
        <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-accent relative z-10 transition-transform duration-500 group-hover:scale-105"
        >
            <path
                d="M25 75 V 25 L 75 75 V 25"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="square"
                stroke-linejoin="miter"
            />
            <rect
                x="25"
                y="25"
                width="50"
                height="50"
                stroke="currentColor"
                stroke-width="1"
                stroke-opacity="0.3"
                fill="none"
            />
        </svg>
    </div>

    <!-- Headlines -->
    <h1
        class="text-5xl md:text-7xl font-bold tracking-tighter mb-6 relative z-10"
    >
        NEXUS QUANT
    </h1>
    <h2
        class="text-lg md:text-xl text-secondary font-mono max-w-xl mx-auto leading-relaxed relative z-10"
    >
        Proprietary Quantitative Research &<br />Automated Decision Systems.
    </h2>

    <!-- Scroll indicator -->
    <div
        class="absolute bottom-12 animate-bounce text-secondary text-xs font-mono opacity-50"
    >
        SCROLL_DOWN
    </div>
</section>
