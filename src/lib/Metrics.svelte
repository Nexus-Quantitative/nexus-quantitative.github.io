<script lang="ts">
    import { locale } from "svelte-i18n";
    import { onMount } from "svelte";

    let defaultUrl = "https://zestytarragon1335.grafana.net/public-dashboards/3f1e338bcdfd420ca595b79e8c32d640";
    let grafanaUrl = defaultUrl;
    let inputUrl = defaultUrl;
    let isEditing = false;

    onMount(() => {
        const savedUrl = localStorage.getItem("NEXUS_GRAFANA_URL");
        if (savedUrl) {
            grafanaUrl = savedUrl;
            inputUrl = savedUrl;
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

                <div class="flex justify-end font-mono text-xs opacity-20 hover:opacity-80 transition-opacity duration-300">
                    <button
                        on:click={() => isEditing = true}
                        class="text-white hover:text-accent cursor-pointer"
                    >
                        [ {$locale === 'pt' ? 'EDITAR TELEMETRIA' : 'EDIT TELEMETRY'} ]
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

                        {#if grafanaUrl}
                            <button
                                type="button"
                                on:click={() => isEditing = false}
                                class="px-6 py-3 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 text-xs w-full text-center"
                            >
                                {$locale === 'pt' ? 'CANCELAR' : 'CANCEL'}
                            </button>
                        {/if}
                    </div>
                </form>
            </div>
        {/if}
    </div>
</section>

