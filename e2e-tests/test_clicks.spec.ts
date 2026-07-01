import { test, expect } from '@playwright/test';

test('verify timeframe switches on speedometer', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log("Navigating to /#/terminal...");
  await page.goto('/#/terminal');
  await page.waitForTimeout(3000); // wait for telemetry to load

  const getSpeedometerContent = async () => {
    return await page.evaluate(() => {
      const section = document.querySelector('section#aggression-speedometer');
      if (!section) return 'Section not found';
      return section.innerText;
    });
  };

  console.log("--- Initial Content ---");
  console.log(await getSpeedometerContent());
  console.log("Clicking 5M WINDOW...");
  const btn5m = page.getByRole('button', { name: '5M WINDOW', exact: true });
  await btn5m.click();
  await page.waitForTimeout(500);
  console.log("--- After clicking 5M WINDOW ---");
  console.log(await getSpeedometerContent());

  console.log("Clicking 1H WINDOW...");
  const btn1h = page.getByRole('button', { name: '1H WINDOW', exact: true });
  await btn1h.click();
  await page.waitForTimeout(500);
  console.log("--- After clicking 1H WINDOW ---");
  console.log(await getSpeedometerContent());
});
