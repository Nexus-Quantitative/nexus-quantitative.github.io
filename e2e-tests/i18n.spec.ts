import { test, expect } from '@playwright/test';

test.describe('Internationalization (i18n) Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should display the language selector', async ({ page }) => {
    // Check if language buttons are present
    const enButton = page.getByRole('button', { name: 'English' });
    const ptButton = page.getByRole('button', { name: 'Português' });
    const esButton = page.getByRole('button', { name: 'Español' });

    await expect(enButton).toBeVisible();
    await expect(ptButton).toBeVisible();
    await expect(esButton).toBeVisible();
  });

  test('should allow changing the language', async ({ page }) => {
    // Record the subtitle text for later comparison (since title/brand name is constant)
    const initialSubtitle = await page.getByRole('heading', { level: 2 }).textContent();

    // Change to Portuguese
    const ptButton = page.getByRole('button', { name: 'Português' });
    await ptButton.click();

    // Wait for the text to change
    await page.waitForTimeout(500);

    // Check if the subtitle has been updated
    const subtitleAfterChange = await page.getByRole('heading', { level: 2 }).textContent();
    expect(subtitleAfterChange).not.toBe(initialSubtitle);

    // Change to Spanish
    const esButton = page.getByRole('button', { name: 'Español' });
    await esButton.click();

    // Wait for the text to change
    await page.waitForTimeout(500);

    // Check if the subtitle has been updated again
    const subtitleAfterSecondChange = await page.getByRole('heading', { level: 2 }).textContent();
    expect(subtitleAfterSecondChange).not.toBe(initialSubtitle);
    expect(subtitleAfterSecondChange).not.toBe(subtitleAfterChange);
  });

  test('should display texts corresponding to the selected language', async ({ page }) => {
    // Expected texts in each language (based on i18n.ts file)
    const expectedTexts: Record<string, { title: string; subtitle: string }> = {
      en: {
        title: 'NEXUS QUANT',
        subtitle: 'Proprietary Quantitative Research & Automated Decision Systems.'
      },
      pt: {
        title: 'NEXUS QUANT',
        subtitle: 'Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.'
      },
      es: {
        title: 'NEXUS QUANT',
        subtitle: 'Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.'
      }
    };

    // Test each language
    const languages = [
      { code: 'en', button: page.getByRole('button', { name: 'English' }) },
      { code: 'pt', button: page.getByRole('button', { name: 'Português' }) },
      { code: 'es', button: page.getByRole('button', { name: 'Español' }) }
    ];

    for (const lang of languages) {
      // Change to the language
      await lang.button.click();

      // Wait for the text to change
      await page.waitForTimeout(500);

      // Check the title
      const title = await page.getByRole('heading', { level: 1 }).textContent();
      expect(title).toContain(expectedTexts[lang.code].title);

      // Check the subtitle
      const subtitle = page.getByText(expectedTexts[lang.code].subtitle, { exact: true });
      await expect(subtitle).toBeVisible();
    }
  });

  test('should persist language preference between reloads', async ({ page }) => {
    // Change to Portuguese
    const ptButton = page.getByRole('button', { name: 'Português' });
    await ptButton.click();

    // Wait for the text to change
    await page.waitForTimeout(500);

    // Record the heading text in Portuguese
    const titleInPortuguese = await page.getByRole('heading', { level: 1 }).textContent();

    // Reload the page
    await page.reload();

    // Wait for the page to fully load after reload
    await page.waitForLoadState('networkidle');

    // Check if the text is still in Portuguese after reload
    const titleAfterReload = await page.getByRole('heading', { level: 1 }).textContent();
    expect(titleAfterReload).toBe(titleInPortuguese);
  });
});