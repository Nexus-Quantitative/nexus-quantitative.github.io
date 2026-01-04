<script lang="ts">
  import { waitLocale, t } from "svelte-i18n";
  import ThreeBackground from "./lib/ThreeBackground.svelte";
  import Hero from "./lib/Hero.svelte";
  import Philosophy from "./lib/Philosophy.svelte";
  import Stack from "./lib/Stack.svelte";
  import Metrics from "./lib/Metrics.svelte";
  import Footer from "./lib/Footer.svelte";

  import AudioPlayer from "./lib/AudioPlayer.svelte";
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
    <ThreeBackground />

    <AudioPlayer />

    <Hero />
    <Philosophy />
    <Stack />
    <Metrics />
    <Footer />
  </main>
{/await}

<style>
  :global(html) {
    scroll-behavior: smooth;
    background: #000;
  }
</style>
