<script lang="ts">
    import { t } from "svelte-i18n";
</script>

<section id="metrics" class="py-24 px-4 bg-transparent">
    <div class="max-w-4xl mx-auto w-full group">
        <!-- Title -->
        <h3
            class="text-center font-mono text-accent mb-8 tracking-widest text-sm opacity-80"
        >
            {$t("metrics.title")}
        </h3>

        <div
            class="border border-white/20 font-mono text-xs md:text-sm w-full bg-[#080808] shadow-2xl rounded-sm overflow-hidden"
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
                        MARKET_DATA_STREAM
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
                        STRATEGY_ENGINE
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
                        RISK_CONTROLLER
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
                        AUDIT_LOG_SYNC
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
    </div>
</section>
