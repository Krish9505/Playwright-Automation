// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://example.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Example/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://example.com');

  // Click the get started link.
  await page.getByRole('link', { name: /Example/i }).click();

  // Expects page URL to contain intro.
  await expect(page).toHaveURL(/.*example/);
});
