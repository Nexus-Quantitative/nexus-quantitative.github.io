<script lang="ts">
  import ThreeBackground from "./lib/ThreeBackground.svelte";
  import Hero from "./lib/Hero.svelte";
  import Philosophy from "./lib/Philosophy.svelte";
  import Stack from "./lib/Stack.svelte";
  import Metrics from "./lib/Metrics.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main
  class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"
>
  <!-- Global Three.js Background -->
  <ThreeBackground />

  <Hero />
  <Philosophy />
  <Stack />
  <Metrics />
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
    background: #000;
  }
</style>
