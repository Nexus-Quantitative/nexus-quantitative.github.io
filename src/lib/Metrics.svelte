<script lang="ts">
    // Metrics Section (Hidden/Discrete)
</script>

<section id="metrics" class="py-24 px-4 bg-[#080808]">
    <div class="max-w-4xl mx-auto w-full group">
        <div
            class="flex justify-between items-end mb-4 px-2 opacity-50 group-hover:opacity-100 transition-opacity"
        >
            <h3 class="text-xs font-mono text-secondary">
                LIVE_METRICS_STREAM v2.4.1
            </h3>
            <div class="flex gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                <div
                    class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                ></div>
            </div>
        </div>

        <div
            class="border border-white/20 font-mono text-xs md:text-sm w-full bg-[#050505] shadow-2xl rounded-sm overflow-hidden"
        >
            <!-- Header -->
            <div
                class="grid grid-cols-3 bg-white/[0.03] p-4 text-secondary/70 border-b border-white/10 tracking-wider"
            >
                <div>SYSTEM COMPONENT</div>
                <div>STATUS</div>
                <div class="text-right">LATENCY</div>
            </div>

            <!-- Rows -->
            <div class="divide-y divide-white/5">
                <div
                    class="grid grid-cols-3 p-4 hover:bg-white/[0.02] transition-colors cursor-crosshair"
                >
                    <div class="text-white">DATA_FEED_BINANCE</div>
                    <div class="text-accent flex items-center gap-2">
                        <span class="w-1 h-1 bg-accent rounded-full"></span> CONNECTED
                    </div>
                    <div class="text-right text-secondary">45ms</div>
                </div>

                <div
                    class="grid grid-cols-3 p-4 hover:bg-white/[0.02] transition-colors cursor-crosshair"
                >
                    <div class="text-white">ORDER_EXECUTION</div>
                    <div class="text-secondary/50">IDLE</div>
                    <div class="text-right text-secondary">-</div>
                </div>

                <div
                    class="grid grid-cols-3 p-4 hover:bg-white/[0.02] transition-colors cursor-crosshair"
                >
                    <div class="text-white">RISK_GUARDRAILS</div>
                    <div class="text-accent flex items-center gap-2">
                        <span class="w-1 h-1 bg-accent rounded-full"></span> ACTIVE
                    </div>
                    <div class="text-right text-secondary">0ms</div>
                </div>

                <div
                    class="grid grid-cols-3 p-4 hover:bg-white/[0.02] transition-colors cursor-crosshair"
                >
                    <div class="text-white">LEDGER_SYNC</div>
                    <div class="text-accent flex items-center gap-2">
                        <span class="w-1 h-1 bg-accent rounded-full"></span> SYNCED
                    </div>
                    <div class="text-right text-secondary">12ms</div>
                </div>
            </div>

            <!-- Footer simulation -->
            <div
                class="p-2 border-t border-white/10 bg-black text-[10px] text-gray-600 text-right"
            >
                Hash: 0x9a7f...2b1c // BLOCK: 18,492,001
            </div>
        </div>
    </div>
</section>
