// @ts-check
const { test, expect } = require('@playwright/test');
const { LunchPage } = require('./LunchPage');

const loginEmail = 'Dainius.Kaucikas@sourceryacademy.com';
const loginPassword = 'nera_svarbus47';

test.describe('Tests', () => {
  test('Ordered item should appear in the navigation bar', async ({ page }) => {
    const lunchPage = new LunchPage(page);

    await lunchPage.navigate();
    await lunchPage.login(loginEmail, loginPassword);
    await lunchPage.selectFirstItem();

    await lunchPage.assertFirstItemInCart();
  })
});