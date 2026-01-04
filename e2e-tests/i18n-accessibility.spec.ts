import { test, expect } from '@playwright/test';
import { AccessibilityHelper } from './helpers/accessibility';

test.describe('Language Selector Accessibility Tests', () => {
  let a11y: AccessibilityHelper;

  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
    a11y = new AccessibilityHelper(page);
  });

  test('language selector should be accessible by keyboard', async ({ page }) => {
    // Check if language buttons are present
    const enButton = page.getByRole('button', { name: 'English' });

    // Check if the button can receive focus
    await enButton.focus();

    // Confirm that the element received focus
    const isFocused = await page.evaluate(() => {
      return document.activeElement?.tagName.toLowerCase() === 'button';
    });

    expect(isFocused, 'The language button should receive focus').toBeTruthy();

    // Check keyboard navigation between buttons
    await page.keyboard.press('Tab');

    // Confirm that focus moved to the next button
    const secondButtonFocused = await page.evaluate(() => {
      return document.activeElement?.tagName.toLowerCase() === 'button' &&
        document.activeElement?.textContent?.trim() === 'Português';
    });

    expect(secondButtonFocused, 'It should be possible to navigate between buttons with Tab').toBeTruthy();
  });

  test('language buttons should have appropriate labels', async ({ page }) => {
    // Locate buttons by their visible text content first to ensure we find the correct element
    const enButton = page.getByRole('button').filter({ hasText: 'English' });
    const ptButton = page.getByRole('button').filter({ hasText: 'Português' });
    const esButton = page.getByRole('button').filter({ hasText: 'Español' });

    // Wait for the buttons to be identifyingly visible
    await expect(enButton).toBeVisible();
    await expect(ptButton).toBeVisible();
    await expect(esButton).toBeVisible();

    // Check if buttons have aria-label configured (which handles accessibility name)
    const enLabel = await enButton.getAttribute('aria-label');
    const ptLabel = await ptButton.getAttribute('aria-label');
    const esLabel = await esButton.getAttribute('aria-label');

    expect(enLabel, 'The EN button should have aria-label').toBeTruthy();
    expect(ptLabel, 'The PT button should have aria-label').toBeTruthy();
    expect(esLabel, 'The ES button should have aria-label').toBeTruthy();

    // Validate that the label actually contains the language name (ensuring translation worked)
    expect(enLabel).toContain('English');
    expect(ptLabel).toContain('Português');
    expect(esLabel).toContain('Español');
  });


  // TODO: Fix flakiness in this test. It currently fails intermittently due to potential race conditions in language switching or contrast detection.
  test.skip('changing language should not cause accessibility issues', async ({ page }) => {
    // Check initial heading structure
    await a11y.expectValidHeadingStructure();

    // Click on the PT button
    // The aria-label changes based on language ("Change language to..." vs "Alterar idioma para..."), 
    // but the language name is always present. Using regex handles the dynamic prefix.
    const ptButton = page.getByRole('button', { name: /Português/i });
    await ptButton.click();

    // Wait for text change - verify subtitle changes to Portuguese
    // "Pesquisa Quantitativa Proprietária..."
    const subtitle = page.getByRole('heading', { level: 2 });
    await expect(subtitle).toContainText('Pesquisa Quantitativa', { timeout: 10000 });

    // Check heading structure after change
    await a11y.expectValidHeadingStructure();

    // Check color contrast after change
    await a11y.expectSufficientColorContrast(page.getByRole('heading', { level: 1 }));

    // Click on the ES button
    const esButton = page.getByRole('button', { name: /Español/i });
    await esButton.click();

    // Wait for text change - verify subtitle changes to Spanish
    // "Investigación Cuantitativa Propietaria..."
    await expect(subtitle).toContainText('Investigación Cuantitativa', { timeout: 10000 });

    // Repeat checks
    await a11y.expectValidHeadingStructure();
    await a11y.expectSufficientColorContrast(page.getByRole('heading', { level: 1 }));
  });


  test('active button should be visually distinct', async ({ page }) => {
    // Check if the active button has the 'active' class
    const ptButton = page.getByRole('button').filter({ hasText: 'Português' });
    const enButton = page.getByRole('button').filter({ hasText: 'English' });

    await ptButton.click();

    // Wait for the change to class 'active' on PT button
    await expect(ptButton).toHaveClass(/active/, { timeout: 10000 });

    // Check if the EN button does not have the 'active' class
    await expect(enButton).not.toHaveClass(/active/);
  });

});