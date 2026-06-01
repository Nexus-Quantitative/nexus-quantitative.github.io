<script lang="ts">
  import { waitLocale, t } from "svelte-i18n";
  import { onMount } from "svelte";
  import EventHorizonBackground from "./lib/EventHorizonBackground.svelte";
  import Hero from "./lib/Hero.svelte";
  import Philosophy from "./lib/Philosophy.svelte";
  import Stack from "./lib/Stack.svelte";
  import Evolution from "./lib/Evolution.svelte";
  import Metrics from "./lib/Metrics.svelte";
  import Footer from "./lib/Footer.svelte";
  import AudioPlayer from "./lib/AudioPlayer.svelte";
  import Presentation from "./lib/Presentation.svelte";
  import ArkStreamsPresentation from "./lib/ArkStreamsPresentation.svelte";
  import OperationalReport from "./lib/OperationalReport.svelte";

  // Called once — storing the promise prevents Svelte from re-calling it when
  // $locale changes, which would briefly unmount <main> on every language switch.
  const localeReady = waitLocale();

  let hash = window.location.hash;

  onMount(() => {
    const updateHash = () => (hash = window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  });
</script>

{#await localeReady}
  <div class="bg-black min-h-screen flex items-center justify-center">
    <div class="animate-pulse text-accent font-mono">
      {$t("common.loading")}
    </div>
  </div>
{:then}
  <main
    class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"
  >
    <!-- Global Three.js Background -->
    <EventHorizonBackground />

    <AudioPlayer />

    {#if hash === "#/presentation"}
      <Presentation />
    {:else if hash === "#/ark-streams"}
      <ArkStreamsPresentation />
    {:else if hash === "#/relatorios"}
      <OperationalReport />
    {:else}
      <Hero />
      <Philosophy />
      <Stack />
      <Evolution />
      <Metrics />
      <Footer />
    {/if}
  </main>
{/await}

<style>
  :global(html) {
    scroll-behavior: smooth;
    background: #000;
  }
</style>
