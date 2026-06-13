<script lang="ts">
    const PUB_X  = 8;
    const PUB_W  = 150;
    const PUB_H  = 54;
    const SUB_X  = 300;
    const SUB_W  = 245;
    const SUB_H  = 60;
    const CONS_X = 670;
    const CONS_W = 160;
    const CONS_H = 34;
    const SPREAD = 32;

    const lanes = [
        {
            y: 75,
            publisher: "Collectors",
            publisherSub: "Bitget · Binance · Yahoo",
            subject: "market.kline.<sym>.<tf>",
            retention: "7 days",
            wildcard: false,
            color: "#f97316",
            colorDim: "rgba(249,115,22,0.12)",
            strokeDim: "rgba(249,115,22,0.40)",
            consumers: ["FractalEngine", "Nexus Terminal"],
            pulseBegin: ["0s", "1.1s"],
            fanBegin: ["1.6s", "2.1s"],
        },
        {
            y: 193,
            publisher: "FractalEngine",
            publisherSub: "1 instance / sym×tf",
            subject: "market.analyzed.*",
            retention: "7 days",
            wildcard: true,
            color: "#00FF94",
            colorDim: "rgba(0,255,148,0.09)",
            strokeDim: "rgba(0,255,148,0.42)",
            consumers: ["AlligatorTrend", "API Server"],
            pulseBegin: ["0.4s", "1.5s"],
            fanBegin: ["2.0s", "2.5s"],
        },
        {
            y: 311,
            publisher: "AlligatorTrend",
            publisherSub: "BTCUSDT · XAUUSDT",
            subject: "signals.trade.<sym>",
            retention: "30 days",
            wildcard: false,
            color: "#a78bfa",
            colorDim: "rgba(167,139,250,0.09)",
            strokeDim: "rgba(167,139,250,0.38)",
            consumers: ["PaperBroker", "WebSocket"],
            pulseBegin: ["0.8s", "1.9s"],
            fanBegin: ["2.4s", "2.9s"],
        },
    ];

    function pathPubSub(y: number) {
        return `M ${PUB_X + PUB_W} ${y} L ${SUB_X} ${y}`;
    }
    function pathSubC1(y: number) {
        return `M ${SUB_X + SUB_W} ${y} Q ${SUB_X + SUB_W + 42} ${y} ${CONS_X} ${y - SPREAD}`;
    }
    function pathSubC2(y: number) {
        return `M ${SUB_X + SUB_W} ${y} Q ${SUB_X + SUB_W + 42} ${y} ${CONS_X} ${y + SPREAD}`;
    }

    const kvY = 368;
</script>

<div class="w-full bg-black/20 border border-white/10 rounded-xl overflow-hidden p-4">
    <div class="flex items-center justify-between mb-3 px-2">
        <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">publishers</span>
        <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest">nats subject bus</span>
        <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">subscribers</span>
    </div>

    <svg
        viewBox="0 0 845 402"
        class="w-full"
        style="height: auto;"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {#each lanes as lane, i}
                <path id="ps{i}"  d={pathPubSub(lane.y)} />
                <path id="sc1{i}" d={pathSubC1(lane.y)} />
                <path id="sc2{i}" d={pathSubC2(lane.y)} />
            {/each}
        </defs>

        {#each lanes as lane, i}
            <!-- Publisher box -->
            <rect
                x={PUB_X} y={lane.y - PUB_H / 2}
                width={PUB_W} height={PUB_H} rx="6"
                fill={lane.colorDim} stroke={lane.strokeDim} stroke-width="1"
            />
            <text x={PUB_X + PUB_W / 2} y={lane.y - 7}
                text-anchor="middle" fill={lane.color}
                font-size="12.5" font-family="monospace" font-weight="bold"
            >{lane.publisher}</text>
            <text x={PUB_X + PUB_W / 2} y={lane.y + 11}
                text-anchor="middle" fill="rgba(255,255,255,0.30)"
                font-size="9" font-family="monospace"
            >{lane.publisherSub}</text>

            <!-- Pub → Subject connector -->
            <line
                x1={PUB_X + PUB_W} y1={lane.y}
                x2={SUB_X}          y2={lane.y}
                stroke={lane.strokeDim} stroke-width="0.8" stroke-dasharray="5 4"
            />
            {#each lane.pulseBegin as begin}
                <circle r="4.5" fill={lane.color} opacity="0.9">
                    <animateMotion dur="1.7s" repeatCount="indefinite" begin={begin}>
                        <mpath href="#ps{i}" />
                    </animateMotion>
                </circle>
            {/each}

            <!-- Subject chip -->
            <rect
                x={SUB_X} y={lane.y - SUB_H / 2}
                width={SUB_W} height={SUB_H} rx="8"
                fill={lane.colorDim} stroke={lane.color} stroke-width="1.2"
            />
            <!-- outer glow -->
            <rect
                x={SUB_X} y={lane.y - SUB_H / 2}
                width={SUB_W} height={SUB_H} rx="8"
                fill="none" stroke={lane.color} stroke-width="4" opacity="0.07"
            />
            <text x={SUB_X + SUB_W / 2} y={lane.y - 8}
                text-anchor="middle" fill={lane.color}
                font-size="12.5" font-family="monospace" font-weight="bold" letter-spacing="0.3"
            >{lane.subject}</text>
            <text x={SUB_X + SUB_W / 2} y={lane.y + 11}
                text-anchor="middle" fill="rgba(255,255,255,0.32)"
                font-size="9" font-family="monospace"
            >{#if lane.wildcard}wildcard · {/if}{lane.retention} retention</text>

            <!-- Subject → Consumer paths -->
            <path d={pathSubC1(lane.y)} fill="none" stroke={lane.strokeDim} stroke-width="0.8" stroke-dasharray="5 4" />
            <path d={pathSubC2(lane.y)} fill="none" stroke={lane.strokeDim} stroke-width="0.8" stroke-dasharray="5 4" />

            <!-- Fan-out dots -->
            <circle r="4" fill={lane.color} opacity="0.88">
                <animateMotion dur="1.1s" repeatCount="indefinite" begin={lane.fanBegin[0]}>
                    <mpath href="#sc1{i}" />
                </animateMotion>
            </circle>
            <circle r="4" fill={lane.color} opacity="0.88">
                <animateMotion dur="1.1s" repeatCount="indefinite" begin={lane.fanBegin[1]}>
                    <mpath href="#sc2{i}" />
                </animateMotion>
            </circle>

            <!-- Consumer 1 -->
            <rect
                x={CONS_X} y={lane.y - SPREAD - CONS_H / 2}
                width={CONS_W} height={CONS_H} rx="5"
                fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"
            />
            <text x={CONS_X + CONS_W / 2} y={lane.y - SPREAD + 6}
                text-anchor="middle" fill="rgba(255,255,255,0.70)"
                font-size="11" font-family="monospace"
            >{lane.consumers[0]}</text>

            <!-- Consumer 2 -->
            <rect
                x={CONS_X} y={lane.y + SPREAD - CONS_H / 2}
                width={CONS_W} height={CONS_H} rx="5"
                fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"
            />
            <text x={CONS_X + CONS_W / 2} y={lane.y + SPREAD + 6}
                text-anchor="middle" fill="rgba(255,255,255,0.70)"
                font-size="11" font-family="monospace"
            >{lane.consumers[1]}</text>
        {/each}

        <!-- Wildcard callout on market.analyzed.* -->
        <rect x="338" y="156" width="166" height="18" rx="9"
            fill="rgba(0,255,148,0.14)" stroke="rgba(0,255,148,0.45)" stroke-width="0.6"
        />
        <text x="421" y="169" text-anchor="middle" fill="#00FF94"
            font-size="8.5" font-family="monospace"
        >new symbols auto-picked up</text>

        <!-- Divider -->
        <line x1="200" y1={kvY - 12} x2="645" y2={kvY - 12}
            stroke="rgba(255,255,255,0.07)" stroke-width="0.6"
        />

        <!-- KV Buckets -->
        <rect x="200" y={kvY} width="195" height="26" rx="5"
            fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"
        />
        <text x="297" y={kvY + 11} text-anchor="middle" fill="rgba(0,255,148,0.80)"
            font-size="10" font-family="monospace" font-weight="bold"
        >KV: MARKET_STATE</text>
        <text x="297" y={kvY + 23} text-anchor="middle" fill="rgba(255,255,255,0.22)"
            font-size="7.5" font-family="monospace"
        >latest snapshot / sym×tf</text>

        <rect x="410" y={kvY} width="235" height="26" rx="5"
            fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"
        />
        <text x="527" y={kvY + 11} text-anchor="middle" fill="rgba(0,255,148,0.80)"
            font-size="10" font-family="monospace" font-weight="bold"
        >KV: STRATEGY_STATE</text>
        <text x="527" y={kvY + 23} text-anchor="middle" fill="rgba(255,255,255,0.22)"
            font-size="7.5" font-family="monospace"
        >last 50 state transitions</text>
    </svg>
</div>
