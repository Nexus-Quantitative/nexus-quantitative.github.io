<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<section id="philosophy" class="py-32 px-4 bg-transparent">
    <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start relative z-10"
    >
        <div class="sticky top-32">
            <h3 class="text-xl font-mono text-accent mb-2">
                {$t("philosophy.title")}
            </h3>
            <div class="h-1 w-12 bg-accent/30"></div>
        </div>

        <div
            class="space-y-12 bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"
        >
            <p
                class="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans"
            >
                {@html $t("philosophy.hero_text")}
            </p>

            <div
                class="space-y-6 font-mono text-sm md:text-base text-secondary"
            >
                <div class="flex gap-4">
                    <span class="text-accent">[01]</span>
                    <p>
                        <strong class="text-white"
                            >{$t("philosophy.p1.title")}:</strong
                        >
                        {$t("philosophy.p1.text")}
                    </p>
                </div>
                <div class="flex gap-4">
                    <span class="text-accent">[02]</span>
                    <p>
                        <strong class="text-white"
                            >{$t("philosophy.p2.title")}:</strong
                        >
                        {$t("philosophy.p2.text")}
                    </p>
                </div>
                <div class="flex gap-4">
                    <span class="text-accent">[03]</span>
                    <p>
                        <strong class="text-white"
                            >{$t("philosophy.p3.title")}:</strong
                        >
                        {$t("philosophy.p3.text")}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
