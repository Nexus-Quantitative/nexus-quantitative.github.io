<script lang="ts">
    import { locale, locales, t } from "svelte-i18n";

    const languages = [
        { code: "en", name: "English" },
        { code: "pt", name: "Português" },
        { code: "es", name: "Español" },
        { code: "ru", name: "Русский" },
        { code: "uk", name: "Українська" },
        { code: "zh", name: "中文" },
        { code: "ja", name: "日本語" },
        { code: "de", name: "Deutsch" },
    ];

    function setLanguage(code: string) {
        $locale = code;
        localStorage.setItem("preferred-locale", code);
    }

    // Sync with localStorage on init if available
    // (Handled in i18n.ts detectBestLocale now)
</script>

<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs">
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
