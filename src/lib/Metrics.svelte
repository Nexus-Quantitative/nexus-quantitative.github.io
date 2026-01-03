<script lang="ts">
    // Metrics Section
</script>

<section id="metrics" class="py-24 px-4 bg-[#050505]">
    <div class="max-w-4xl mx-auto w-full group">
        <!-- Title -->
        <h3
            class="text-center font-mono text-accent mb-8 tracking-widest text-sm opacity-80"
        >
            :: SYSTEM STATUS ::
        </h3>

        <div
            class="border border-white/20 font-mono text-xs md:text-sm w-full bg-[#080808] shadow-2xl rounded-sm overflow-hidden"
        >
            <!-- Header -->
            <div
                class="grid grid-cols-4 bg-white/[0.05] p-4 text-secondary/90 border-b border-white/10 tracking-wider font-bold"
            >
                <div class="col-span-1">COMPONENT</div>
                <div class="col-span-1">STATUS</div>
                <div class="col-span-1 text-right">LATENCY</div>
                <div class="col-span-1 text-right">HEARTBEAT</div>
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
                        CONNECTED
                    </div>
                    <div class="text-right text-secondary col-span-1">42ms</div>
                    <div class="text-right text-secondary col-span-1">
                        0s ago
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
                        RUNNING
                    </div>
                    <div class="text-right text-secondary col-span-1">12ms</div>
                    <div class="text-right text-secondary col-span-1">
                        0s ago
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
                        GUARDED
                    </div>
                    <div class="text-right text-secondary col-span-1">0ms</div>
                    <div class="text-right text-secondary col-span-1">
                        1s ago
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
                        SYNCED
                    </div>
                    <div class="text-right text-secondary col-span-1">-</div>
                    <div class="text-right text-secondary col-span-1">
                        5s ago
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
