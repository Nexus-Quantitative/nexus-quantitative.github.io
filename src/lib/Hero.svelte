<script lang="ts">
    import { t } from "svelte-i18n";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";
    import NexusPulse from "./NexusPulse.svelte";

    // Hero Section
    const scrollToResearch = () => {
        document
            .getElementById("featured-research")
            ?.scrollIntoView({ behavior: "smooth" });
    };
</script>

<section
    id="hero"
    class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"
>
    <!-- Header/Top Bar (Mobile) -->
    <div class="md:hidden absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <LanguageSwitcher />
        <NexusPulse />
    </div>

    <!-- Language Switcher (Desktop) -->
    <div class="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <LanguageSwitcher />
    </div>

    <!-- Nav links (Desktop) -->
    <div class="hidden md:flex absolute top-8 right-8 items-center gap-6 font-mono text-xs">
        <a
            href="#/relatorios"
            class="text-[#00F0FF] hover:text-white transition-colors duration-300 tracking-widest font-bold"
        >{$t("nav.reports")}</a>
        <a
            href="#/terminal"
            class="text-[#00FF94] hover:text-[#00F0FF] transition-colors duration-300 tracking-widest font-bold animate-pulse"
        >{$t("nav.terminal")}</a>
        <a
            href="#/ark-streams"
            class="text-white/50 hover:text-[#00F0FF] transition-colors duration-300 tracking-widest"
        >[ ARK STREAMS ]</a>
        <NexusPulse />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <!-- Pre-Header
        <div
            class="text-accent font-mono text-xs md:text-sm tracking-widest mb-6 opacity-80"
        >
            ● {$t("hero.status")}
        </div>  -->

        <!-- Headline -->
        <h1
            class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient-nexus leading-none drop-shadow-lg"
        >
            {$t("hero.title")}
        </h1>

        <!-- Sub-headline -->
        <h2
            class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"
        >
            {@html $t("hero.subtitle").replace("&", "&<br />")}
        </h2>

        <!-- CTA -->
        <div class="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            <a
                href="#/relatorios"
                class="group relative px-8 py-3 bg-transparent overflow-hidden border border-[#00F0FF] hover:shadow-[0_0_25px_var(--color-quantum-cyan)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"
            >
                <div
                    class="absolute inset-0 w-0 bg-[#00F0FF]/15 transition-all duration-[250ms] ease-out group-hover:w-full"
                ></div>
                <span
                    class="relative text-xs font-mono text-[#00F0FF] group-hover:text-white tracking-wider text-center font-bold"
                >
                    {$t("hero.cta_reports")}
                </span>
            </a>

            <a
                href="#/terminal"
                class="group relative px-8 py-3 bg-transparent overflow-hidden border border-[#00FF94]/60 hover:border-[#00FF94] hover:shadow-[0_0_25px_rgba(0,255,148,0.35)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"
            >
                <div
                    class="absolute inset-0 w-0 bg-[#00FF94]/10 transition-all duration-[250ms] ease-out group-hover:w-full"
                ></div>
                <span
                    class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-wider text-center font-bold"
                >
                    {$t("hero.cta_terminal")}
                </span>
            </a>

            <a
                href="#/ark-streams"
                class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"
            >
                <div
                    class="absolute inset-0 w-0 bg-[#00F0FF]/10 transition-all duration-[250ms] ease-out group-hover:w-full"
                ></div>
                <span
                    class="relative text-xs font-mono text-white group-hover:text-[#00F0FF] tracking-wider text-center"
                >
                    {$t("hero.cta_ark")}
                </span>
            </a>

            <button
                on:click={scrollToResearch}
                class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/15 hover:border-white/40 transition-all duration-300 w-full md:w-auto"
            >
                <div
                    class="absolute inset-0 w-0 bg-white/5 transition-all duration-[250ms] ease-out group-hover:w-full"
                ></div>
                <span
                    class="relative text-xs font-mono text-white/75 group-hover:text-white tracking-wider"
                >
                    {$t("hero.cta")}
                </span>
            </button>
        </div>
    </div>
</section>
