// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Test', () => {
  test('Test description', async ({ page }) => {
    await page.goto('https://lunch.devbstaging.com/login-password');
    await expect(page.locator('.headline')).toContainText('Sign in');
  })
});