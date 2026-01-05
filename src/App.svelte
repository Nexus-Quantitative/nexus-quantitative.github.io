<script lang="ts">
  import { waitLocale, t } from "svelte-i18n";
  import { onMount } from "svelte";
  import EventHorizonBackground from "./lib/EventHorizonBackground.svelte";
  import Hero from "./lib/Hero.svelte";
  import Philosophy from "./lib/Philosophy.svelte";
  import Stack from "./lib/Stack.svelte";
  import Metrics from "./lib/Metrics.svelte";
  import Footer from "./lib/Footer.svelte";
  import AudioPlayer from "./lib/AudioPlayer.svelte";
  import Presentation from "./lib/Presentation.svelte";

  let hash = window.location.hash;

  onMount(() => {
    const updateHash = () => (hash = window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  });
</script>

{#await waitLocale()}
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
    {:else}
      <Hero />
      <Philosophy />
      <Stack />
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
