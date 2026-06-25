<script lang="ts">
    import { locale, t } from "svelte-i18n";

    const allLanguages = [
        { code: "en", name: "English" },
        { code: "pt", name: "Português" },
    ];

    /** When provided, only these language codes are shown. */
    export let only: string[] | undefined = undefined;

    $: languages = only
        ? allLanguages.filter((l) => only!.includes(l.code))
        : allLanguages;

    function setLanguage(code: string) {
        $locale = code;
        localStorage.setItem("preferred-locale", code);
    }
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
