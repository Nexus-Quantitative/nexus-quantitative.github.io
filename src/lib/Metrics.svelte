<script lang="ts">
    import { t, locale } from "svelte-i18n";
    import { onMount } from "svelte";

    let showLive = false;
    let defaultUrl = "https://zestytarragon1335.grafana.net/public-dashboards/3f1e338bcdfd420ca595b79e8c32d640";
    let grafanaUrl = defaultUrl;
    let inputUrl = defaultUrl;
    let isEditing = false;

    onMount(() => {
        const savedUrl = localStorage.getItem("NEXUS_GRAFANA_URL");
        if (savedUrl) {
            grafanaUrl = savedUrl;
            inputUrl = savedUrl;
            showLive = true;
        }
    });

    const saveUrl = () => {
        let cleanUrl = inputUrl.trim();
        // If they pasted an iframe HTML tag, extract the src attribute
        const iframeSrcMatch = cleanUrl.match(/src=["'](https?:\/\/[^"']+)["']/);
        if (iframeSrcMatch) {
            cleanUrl = iframeSrcMatch[1];
        }
        
        if (cleanUrl) {
            localStorage.setItem("NEXUS_GRAFANA_URL", cleanUrl);
            grafanaUrl = cleanUrl;
            isEditing = false;
            showLive = true;
        }
    };

    const resetUrl = () => {
        localStorage.removeItem("NEXUS_GRAFANA_URL");
        grafanaUrl = defaultUrl;
        inputUrl = defaultUrl;
        isEditing = true;
    };
</script>

<section id="metrics" class="py-24 px-4 bg-transparent">
    <div class="max-w-4xl mx-auto w-full group relative z-10">
        <!-- Title -->
        <h3
            class="text-center font-mono text-accent mb-6 tracking-widest text-sm opacity-80"
        >
            {$t("metrics.title")}
        </h3>

        <!-- Mode Toggles -->
        <div class="flex justify-center gap-4 mb-8 font-mono text-xs">
            <button
                on:click={() => { showLive = false; isEditing = false; }}
                class="px-4 py-2 border transition-all duration-300 relative overflow-hidden {!showLive ? 'border-accent text-accent shadow-[0_0_10px_rgba(0,240,255,0.2)] bg-accent/5' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'}"
            >
                [ {$locale === 'pt' ? 'TELEMETRIA SIMULADA' : 'SIMULATED TELEMETRY'} ]
            </button>
            <button
                on:click={() => showLive = true}
                class="px-4 py-2 border transition-all duration-300 relative overflow-hidden {showLive ? 'border-accent text-accent shadow-[0_0_10px_rgba(0,240,255,0.2)] bg-accent/5' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'}"
            >
                [ {$locale === 'pt' ? 'LIVE GRAFANA' : 'LIVE GRAFANA'} ]
            </button>
        </div>

        {#if !showLive}
            <!-- Simulated Telemetry Grid -->
            <div
                class="border border-white/20 font-mono text-xs md:text-sm w-full bg-black/80 backdrop-blur-md shadow-2xl rounded-sm overflow-hidden"
            >
                <!-- Header -->
                <div
                    class="grid grid-cols-4 bg-white/[0.05] p-4 text-secondary/90 border-b border-white/10 tracking-wider font-bold"
                >
                    <div class="col-span-1">{$t("metrics.header.component")}</div>
                    <div class="col-span-1">{$t("metrics.header.status")}</div>
                    <div class="col-span-1 text-right">
                        {$t("metrics.header.latency")}
                    </div>
                    <div class="col-span-1 text-right">
                        {$t("metrics.header.heartbeat")}
                    </div>
                </div>

                <!-- Rows -->
                <div class="divide-y divide-white/5">
                    <!-- Row 1 -->
                    <div
                        class="grid grid-cols-4 p-4 hover:bg-white/[0.02] transition-colors"
                    >
                        <div class="text-white col-span-1 font-bold">
                            MARKET_COLLECTORS
                        </div>
                        <div
                            class="text-emerald-400 col-span-1 flex items-center gap-2"
                        >
                            {$t("metrics.status_labels.connected")}
                        </div>
                        <div class="text-right text-secondary col-span-1">42ms</div>
                        <div class="text-right text-secondary col-span-1">
                            {$t("metrics.ago", { values: { n: 0 } })}
                        </div>
                    </div>

                    <!-- Row 2 -->
                    <div
                        class="grid grid-cols-4 p-4 hover:bg-white/[0.02] transition-colors"
                    >
                        <div class="text-white col-span-1 font-bold">
                            FRACTAL_ENGINE
                        </div>
                        <div
                            class="text-emerald-400 col-span-1 flex items-center gap-2"
                        >
                            {$t("metrics.status_labels.running")}
                        </div>
                        <div class="text-right text-secondary col-span-1">12ms</div>
                        <div class="text-right text-secondary col-span-1">
                            {$t("metrics.ago", { values: { n: 0 } })}
                        </div>
                    </div>

                    <!-- Row 3 -->
                    <div
                        class="grid grid-cols-4 p-4 hover:bg-white/[0.02] transition-colors"
                    >
                        <div class="text-white col-span-1 font-bold">
                            JETSTREAM_PERSISTENCE
                        </div>
                        <div
                            class="text-emerald-400 col-span-1 flex items-center gap-2"
                        >
                            {$t("metrics.status_labels.guarded")}
                        </div>
                        <div class="text-right text-secondary col-span-1">0ms</div>
                        <div class="text-right text-secondary col-span-1">
                            {$t("metrics.ago", { values: { n: 1 } })}
                        </div>
                    </div>

                    <!-- Row 4 -->
                    <div
                        class="grid grid-cols-4 p-4 hover:bg-white/[0.02] transition-colors"
                    >
                        <div class="text-white col-span-1 font-bold">
                            NEXUS_TERMINAL_IPC
                        </div>
                        <div
                            class="text-blue-400 col-span-1 flex items-center gap-2"
                        >
                            {$t("metrics.status_labels.synced")}
                        </div>
                        <div class="text-right text-secondary col-span-1">-</div>
                        <div class="text-right text-secondary col-span-1">
                            {$t("metrics.ago", { values: { n: 5 } })}
                        </div>
                    </div>
                </div>
                <!-- Footer simulation -->
                <div
                    class="p-2 border-t border-white/10 bg-black text-[10px] text-gray-600 text-right"
                >
                    HASH: 0x9a7f...2b1c // BLOCK: 18,492,001
                </div>
            </div>
        {:else}
            <!-- Live Grafana Area -->
            {#if grafanaUrl && !isEditing}
                <!-- Dashboard Display -->
                <div class="flex flex-col gap-4">
                    <div
                        class="border border-accent/30 rounded-sm overflow-hidden bg-black/90 shadow-[0_0_25px_rgba(0,240,255,0.15)] relative"
                    >
                        <iframe
                            src={grafanaUrl}
                            width="100%"
                            height="550"
                            frameborder="0"
                            title="Grafana Live Metrics"
                            class="w-full bg-black"
                        ></iframe>
                    </div>

                    <div class="flex justify-end font-mono text-xs">
                        <button
                            on:click={resetUrl}
                            class="text-white/40 hover:text-accent transition-colors duration-200"
                        >
                            [ {$locale === 'pt' ? 'EDITAR URL DO DASHBOARD' : 'EDIT DASHBOARD URL'} ]
                        </button>
                    </div>
                </div>
            {:else}
                <!-- Configuration Form -->
                <div
                    class="border border-white/20 p-6 md:p-8 bg-black/95 backdrop-blur-md shadow-2xl rounded-sm max-w-2xl mx-auto"
                >
                    <h4 class="font-mono text-accent text-sm md:text-base mb-4 tracking-widest text-center border-b border-white/10 pb-3">
                        :: {$locale === 'pt' ? 'CONFIGURAR LIVE OBSERVABILITY' : 'CONFIGURE LIVE OBSERVABILITY'} ::
                    </h4>

                    <div class="space-y-4 font-mono text-xs text-secondary mb-6 leading-relaxed">
                        {#if $locale === 'pt'}
                            <p>Para conectar a telemetria em tempo real do sistema:</p>
                            <ol class="list-decimal list-inside space-y-2 text-white/80">
                                <li>Acesse sua conta no <a href="https://grafana.com" target="_blank" rel="noopener noreferrer" class="text-accent underline hover:text-[#4CC9F0]">Grafana Cloud</a>.</li>
                                <li>Configure seu dashboard utilizando as métricas exportadas pelo NATS Exporter e host.</li>
                                <li>No menu superior do painel, vá em <strong class="text-white">Share > Public Dashboard</strong> e ative a opção.</li>
                                <li>Copie o link público gerado ou o código do iframe HTML.</li>
                            </ol>
                        {:else}
                            <p>To connect the system's real-time telemetry:</p>
                            <ol class="list-decimal list-inside space-y-2 text-white/80">
                                <li>Access your account at <a href="https://grafana.com" target="_blank" rel="noopener noreferrer" class="text-accent underline hover:text-[#4CC9F0]">Grafana Cloud</a>.</li>
                                <li>Set up your dashboard with the metrics exported from NATS and the system.</li>
                                <li>In the dashboard top menu, go to <strong class="text-white">Share > Public Dashboard</strong> and activate it.</li>
                                <li>Copy the generated public link or the HTML iframe snippet.</li>
                            </ol>
                        {/if}
                    </div>

                    <form on:submit|preventDefault={saveUrl} class="space-y-4 font-mono">
                        <div>
                            <label for="grafana-url" class="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                {$locale === 'pt' ? 'URL pública ou HTML do Iframe' : 'Public Dashboard URL or Iframe HTML'}
                            </label>
                            <input
                                id="grafana-url"
                                type="text"
                                bind:value={inputUrl}
                                placeholder="https://your-tenant.grafana.net/public-dashboards/..."
                                required
                                class="w-full bg-black/90 border border-white/20 text-accent font-mono p-3 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-300 text-xs md:text-sm"
                            />
                        </div>

                        <div class="flex flex-col md:flex-row gap-4 pt-2">
                            <button
                                type="submit"
                                class="group relative px-6 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 w-full text-center cursor-pointer"
                            >
                                <div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span class="relative text-xs text-white group-hover:text-accent tracking-wider font-bold">
                                    [ {$locale === 'pt' ? 'CONECTAR DASHBOARD' : 'CONNECT DASHBOARD'} ]
                                </span>
                            </button>

                            <button
                                type="button"
                                on:click={() => { showLive = false; isEditing = false; }}
                                class="px-6 py-3 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 text-xs w-full text-center"
                            >
                                {$locale === 'pt' ? 'CANCELAR' : 'CANCEL'}
                            </button>
                        </div>
                    </form>
                </div>
            {/if}
        {/if}
    </div>
</section>

