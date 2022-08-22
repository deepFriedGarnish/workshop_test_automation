// @ts-check
const { test, expect } = require('@playwright/test');
const { LunchPage } = require('./LunchPage');

test.describe('Tests', () => {
  // test('Test description', async ({ page }) => {
  //   const lunchPage = new LunchPage(page);

  //   await lunchPage.navigate();
  //   await lunchPage.login('Dainius.Kaucikas@sourceryacademy.com', 'nera_svarbus47');

  //   await lunchPage.assertText('.v-subheader', 'Dainius Kaucikas');
  // })

  test('First supplier', async ({ page }) => {
    const lunchPage = new LunchPage(page);

    await lunchPage.navigate();
    await lunchPage.login('Dainius.Kaucikas@sourceryacademy.com', 'nera_svarbus47');
    await lunchPage.selectFirstSupplier();
  })
});