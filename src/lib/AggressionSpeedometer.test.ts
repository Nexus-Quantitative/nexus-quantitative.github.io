import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { telemetry } from './telemetry';
import AggressionSpeedometer from './AggressionSpeedometer.svelte';

const mockSnapshot = {
  symbol: "BTCUSDT",
  windows: [
    { label: "5m", buy_usd: 400038641.68756443, sell_usd: 337057105.4087969, delta: 62981536.278767526, ratio: 1.186857168319834 },
    { label: "1h", buy_usd: 660812281.1905662, sell_usd: 626425076.0966656, delta: 34387205.09390056, ratio: 1.0548943623205054 },
    { label: "1d", buy_usd: 11633855094.780405, sell_usd: 11594868123.688768, delta: 38986971.09163666, ratio: 1.0033624333347944 }
  ],
  sources: ["bybit", "okx"],
  updated_at: 1782449541456
};

describe('AggressionSpeedometer Runes Reactivity Test', () => {
  test('should display exact backend values and switch correctly on click', async () => {
    // 1. Enable telemetry and set the mock snapshot
    telemetry.set({
      enabled: true,
      natsOk: true,
      streamsOnline: 2,
      streamsTotal: 2,
      engineRunning: true,
      btcPrice: 60000,
      btcOI: 0,
      btcFunding: 0,
      btcNextFunding: 0,
      btcUpdatedAt: 0,
      recentLiqs: [],
      latestWhaleLiq: null,
      rawLiquidation: null,
      btcAggression: mockSnapshot
    });

    // 2. Render component
    const { container } = render(AggressionSpeedometer);

    // Verify 1h is selected by default
    const labelSpan = container.querySelector('.tracking-\\[0\\.25em\\]');
    expect(labelSpan?.textContent).toContain('ACTIVE // 1H');

    // Verify 1h metrics are displayed
    // Buy Volume (Aggressive) 1h: 660812281.19 -> $660.81M
    // Sell Volume (Aggressive) 1h: 626425076.10 -> $626.43M
    // Net Delta 1h: +34387205.09 -> +$34.39M
    // Buy / Sell Ratio 1h: 1.05 -> 1.05x
    expect(screen.getByText('$660.81M')).toBeInTheDocument();
    expect(screen.getByText('$626.43M')).toBeInTheDocument();
    expect(screen.getByText('+$34.39M')).toBeInTheDocument();
    expect(screen.getByText('1.05x')).toBeInTheDocument();

    console.log("✅ Verified initial 1H window displaying exactly $660.81M Buy and $626.43M Sell Volume!");

    // 3. Click 5M WINDOW button
    const btn5m = screen.getByRole('button', { name: '5M WINDOW', exact: true });
    await fireEvent.click(btn5m);

    // Verify active window changed to 5M
    expect(container.querySelector('.tracking-\\[0\\.25em\\]')?.textContent).toContain('ACTIVE // 5M');

    // Verify 5m metrics are displayed
    // Buy Volume 5m: 400038641.69 -> $400.04M
    // Sell Volume 5m: 337057105.41 -> $337.06M
    // Net Delta 5m: +62981536.28 -> +$62.98M
    // Ratio 5m: 1.19x
    expect(screen.getByText('$400.04M')).toBeInTheDocument();
    expect(screen.getByText('$337.06M')).toBeInTheDocument();
    expect(screen.getByText('+$62.98M')).toBeInTheDocument();
    expect(screen.getByText('1.19x')).toBeInTheDocument();

    console.log("✅ Verified clicking 5M WINDOW updates dashboard reactively to $400.04M Buy / $337.06M Sell Volume!");

    // 4. Click 1D WINDOW button
    const btn1d = screen.getByRole('button', { name: '1D WINDOW', exact: true });
    await fireEvent.click(btn1d);

    // Verify active window changed to 1D
    expect(container.querySelector('.tracking-\\[0\\.25em\\]')?.textContent).toContain('ACTIVE // 1D');

    // Verify 1d metrics are displayed
    // Buy Volume 1d: 11633855094.78 -> $11633.86M
    // Sell Volume 1d: 11594868123.69 -> $11594.87M
    // Net Delta 1d: +38986971.09 -> +$38.99M
    // Ratio 1d: 1.00x
    expect(screen.getByText('$11633.86M')).toBeInTheDocument();
    expect(screen.getByText('$11594.87M')).toBeInTheDocument();
    expect(screen.getByText('+$38.99M')).toBeInTheDocument();
    expect(screen.getByText('1.00x')).toBeInTheDocument();

    console.log("✅ Verified clicking 1D WINDOW updates dashboard reactively to $11633.86M Buy / $11594.87M Sell Volume!");
  });
});
