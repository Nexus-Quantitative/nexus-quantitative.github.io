<script lang="ts">
  import { t } from "svelte-i18n";
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
  import { startTelemetry, stopTelemetry } from "./lib/telemetry";
  import WhaleWatch from "./lib/WhaleWatch.svelte";
  import TerminalDashboard from "./lib/TerminalDashboard.svelte";

  let hash = window.location.hash;

  onMount(() => {
    startTelemetry();
    const updateHash = () => (hash = window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
      stopTelemetry();
    };
  });
</script>

<main
  class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"
>
  <!-- Global Three.js Background -->
  <EventHorizonBackground />

  <AudioPlayer />
  <WhaleWatch />

  {#if hash === "#/presentation"}
    <Presentation />
  {:else if hash === "#/ark-streams"}
    <ArkStreamsPresentation />
  {:else if hash === "#/relatorios"}
    <OperationalReport />
  {:else if hash === "#/terminal"}
    <TerminalDashboard />
  {:else}
    <Hero />
    <Philosophy />
    <Stack />
    <Evolution />
    <Metrics showLink={true} />
    <Footer />
  {/if}
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
    background: #000;
  }
</style>
