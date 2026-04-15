import { test, expect } from '@playwright/test';

test('List Stuff Page', async ({ page }) => {
  await page.goto('http://localhost:3000/list');

  await expect(page).toHaveURL(/.*\/list/);

  await expect(page.getByRole('link', { name: /add stuff/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /list stuff/i })).toBeVisible();

  await expect(page.getByRole('button', { name: /john@foo.com/i })).toBeVisible();

  await expect(page.locator('body')).toBeVisible();
});