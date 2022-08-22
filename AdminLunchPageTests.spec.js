// @ts-check
const { test, expect } = require('@playwright/test');
const { AdminLunchPage } = require('./AdminLunchPage');

const loginUsername = 'admin10@sourceryacademy.com';
const loginPassword = 'nera_svarbus65';

test.describe('Tests', () => {

  test('Admin Login', async ({ page }) => {
    const lunchPage = new AdminLunchPage(page);

    await lunchPage.navigate();
    await lunchPage.login(loginUsername, loginPassword);

  })
});