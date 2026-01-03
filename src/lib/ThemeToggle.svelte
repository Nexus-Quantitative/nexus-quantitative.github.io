<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";
    import { Sun, Moon } from "@lucide/svelte";

    let isDark = true;

    function updateTheme() {
        const mode = isDark ? "dark" : "light";
        const theme = isDark ? "vintage" : "skeleton";

        document.documentElement.setAttribute("data-mode", mode);
        document.documentElement.setAttribute("data-theme", theme);

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme-mode", mode);
    }

    function toggleTheme() {
        isDark = !isDark;
        updateTheme();
    }

    onMount(() => {
        const savedMode = localStorage.getItem("theme-mode");
        if (savedMode) {
            isDark = savedMode === "dark";
        } else {
            // Default to dark for Nexus Quant aesthetics
            isDark = true;
        }
        updateTheme();
    });
</script>

<button
    on:click={toggleTheme}
    aria-label={$t("common.toggle_theme")}
    class="p-2 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent transition-all duration-300"
>
    {#if isDark}
        <Sun size={16} />
    {:else}
        <Moon size={16} />
    {/if}
</button>
