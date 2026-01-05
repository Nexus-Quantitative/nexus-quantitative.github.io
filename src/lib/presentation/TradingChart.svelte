<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let canvas: HTMLCanvasElement;
    let container: HTMLDivElement;
    let animationId: number;

    const GREEN = "#00ff9d";
    const RED = "#ff3e3e";
    const CYAN = "#06b6d4";
    const PURPLE = "#a855f7";

    interface Candle {
        open: number;
        close: number;
        high: number;
        low: number;
    }

    onMount(() => {
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Resize handler
        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = 400;
        };
        resize();
        window.addEventListener("resize", resize);

        // Seed Data
        let candles: Candle[] = [];
        let price = 1500;
        let t = 0;

        // Generate initial history
        for (let i = 0; i < 150; i++) {
            const volatility = 2.5;
            const change = (Math.random() - 0.5) * volatility;
            const open = price;
            const close = price + change;
            const high = Math.max(open, close) + Math.random() * 1.5;
            const low = Math.min(open, close) - Math.random() * 1.5;

            candles.push({ open, close, high, low });
            price = close;
        }

        // EMA Calculation Helper
        const calculateEMA = (data: Candle[], period: number) => {
            const k = 2 / (period + 1);
            let emaArr = [data[0].close];
            for (let i = 1; i < data.length; i++) {
                emaArr.push(data[i].close * k + emaArr[i - 1] * (1 - k));
            }
            return emaArr;
        };

        const render = () => {
            if (!ctx) return;
            // Clear
            ctx.fillStyle = "#050505"; // Almost black
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Grid lines
            ctx.strokeStyle = "#333";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for (let y = 0; y < canvas.height; y += 50) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }
            ctx.stroke();

            // Update Price (Simulation)
            if (t % 25 === 0) {
                // Slower update
                const volatility = 4.0;
                const change =
                    Math.sin(t * 0.05) * 2 + (Math.random() - 0.5) * volatility; // Sine wave + noise
                const open = candles[candles.length - 1].close;
                const close = open + change;
                const high = Math.max(open, close) + Math.random();
                const low = Math.min(open, close) - Math.random();
                candles.push({ open, close, high, low });
                candles.shift(); // Keep fixed length
            }
            t++;

            // Calculate EMAs
            const ema9 = calculateEMA(candles, 9);
            const ema21 = calculateEMA(candles, 21);

            // Scale to Fit
            const minPrice = Math.min(...candles.map((c) => c.low));
            const maxPrice = Math.max(...candles.map((c) => c.high));
            const priceRange = maxPrice - minPrice;
            const padding = 20;

            const getY = (p: number) =>
                canvas.height -
                padding -
                ((p - minPrice) / priceRange) * (canvas.height - padding * 2);
            const candleWidth = (canvas.width / candles.length) * 0.8;
            const spacing = canvas.width / candles.length;

            // Draw Candles
            candles.forEach((c, i) => {
                const x = i * spacing + spacing / 2;
                const yOpen = getY(c.open);
                const yClose = getY(c.close);
                const yHigh = getY(c.high);
                const yLow = getY(c.low);

                const isGreen = c.close >= c.open;

                ctx.strokeStyle = isGreen ? GREEN : RED;
                ctx.fillStyle = isGreen ? GREEN : RED;
                ctx.lineWidth = 1;

                // Wick
                ctx.beginPath();
                ctx.moveTo(x, yHigh);
                ctx.lineTo(x, yLow);
                ctx.stroke();

                // Body
                const bodyHeight = Math.max(1, Math.abs(yClose - yOpen));
                ctx.fillRect(
                    x - candleWidth / 2,
                    Math.min(yOpen, yClose),
                    candleWidth,
                    bodyHeight,
                );
            });

            // Draw EMAs
            const drawLine = (data: number[], color: string) => {
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                data.forEach((val, i) => {
                    const x = i * spacing + spacing / 2;
                    const y = getY(val);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.stroke();
            };

            drawLine(ema9, CYAN);
            drawLine(ema21, PURPLE);

            // Loop
            animationId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
        };
    });

    onDestroy(() => {
        if (animationId) cancelAnimationFrame(animationId);
    });
</script>

<div
    class="w-full relative rounded-xl overflow-hidden border border-gray-800 bg-[#050505] shadow-2xl"
    bind:this={container}
>
    <!-- UI Overlay -->
    <div
        class="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none"
    >
        <h3 class="text-white font-mono text-sm font-bold tracking-widest">
            XTDB / BITEMPORAL FEED
        </h3>
        <div class="flex gap-4 text-xs font-mono">
            <span class="text-cyan-400">EMA(9) :: FAST</span>
            <span class="text-purple-400">EMA(21) :: SLOW</span>
        </div>
    </div>

    <canvas bind:this={canvas} class="w-full h-[400px]"></canvas>

    <!-- Fake Signal -->
    <div
        class="absolute bottom-4 right-4 bg-green-900/40 border border-green-500/50 px-3 py-1 rounded text-green-400 font-mono text-xs animate-pulse"
    >
        ● SIGNAL: BUY LEVERAGED
    </div>
</div>
