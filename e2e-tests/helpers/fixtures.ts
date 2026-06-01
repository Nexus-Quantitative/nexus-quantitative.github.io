import { test as base, expect } from '@playwright/test';

/**
 * Extended test fixture that fixes two root causes of e2e hangs:
 *
 * 1. Blocks external requests (Google Fonts, CDN) so they don't prevent
 *    the browser from settling — keeps all traffic on localhost.
 *
 * 2. Overrides page.goto and page.reload to use waitUntil:'domcontentloaded'
 *    instead of 'load'. Vite's HMR WebSocket keeps a persistent connection
 *    that prevents the 'load' event from ever firing reliably.
 *    After navigation, waits for <main> to confirm the Svelte
 *    {#await waitLocale()} block has resolved and the app is interactive.
 */
export const test = base.extend<object>({
  page: async ({ page }, use) => {
    // ── 1. Block external resources ──────────────────────────────────────────
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.startsWith('http://localhost') || url.startsWith('http://127.0.0.1')) {
        route.continue();
      } else {
        route.abort();
      }
    });

    // ── 2. Helper: wait for app shell after navigation ────────────────────────
    const waitForApp = async () => {
      await page
        .waitForSelector('main', { state: 'visible', timeout: 15000 })
        .catch(() => {});
    };

    // ── 3. Override page.goto ─────────────────────────────────────────────────
    const originalGoto = page.goto.bind(page);
    // @ts-ignore — overriding prototype method on instance is intentional
    page.goto = async (url: string, options: any = {}) => {
      const result = await originalGoto(url, {
        waitUntil: 'domcontentloaded',
        ...options,
      });
      await waitForApp();
      return result;
    };

    // ── 4. Override page.reload ───────────────────────────────────────────────
    const originalReload = page.reload.bind(page);
    // @ts-ignore
    page.reload = async (options: any = {}) => {
      const result = await originalReload({
        waitUntil: 'domcontentloaded',
        ...options,
      });
      await waitForApp();
      return result;
    };

    await use(page);
  },
});

export { expect } from '@playwright/test';
