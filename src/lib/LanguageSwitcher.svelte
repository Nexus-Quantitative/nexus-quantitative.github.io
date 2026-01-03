<script lang="ts">
    import { locale, locales, t } from "svelte-i18n";

    const languages = [
        { code: "en", name: "English" },
        { code: "pt", name: "Português" },
        { code: "es", name: "Español" },
    ];

    function setLanguage(code: string) {
        $locale = code;
        localStorage.setItem("preferred-locale", code);
    }

    // Sync with localStorage on init if available
    import { onMount } from "svelte";
    onMount(() => {
        const saved = localStorage.getItem("preferred-locale");
        if (saved && languages.some((l) => l.code === saved)) {
            $locale = saved;
        }
    });
</script>

<div class="flex gap-4 font-mono text-xs">
    {#each languages as lang}
        <button
            on:click={() => setLanguage(lang.code)}
            aria-label={$t("common.change_language", {
                values: { name: lang.name },
            })}
            class="hover:text-accent transition-colors duration-200 {lang.code ===
            $locale
                ? 'text-accent border-b border-accent active'
                : 'text-white/50'}"
        >
            {lang.name}
        </button>
    {/each}
</div>
