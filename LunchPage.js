const { expect } = require('@playwright/test');

class LunchPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    async login(email, password) {
        await this.page.locator(`input[name='email']`).type(email);
        await this.page.locator(`input[name='password']`).type(password);
        await this.page.locator('.v-btn').click();
    }

    async selectFirstSupplier() {
        await this.page.locator('.v-list__group__header').first().click();
        await this.page.locator('.v-list__group__header--active .v-list__tile').first().click();
        await expect(this.page.locator('h3.red--text')).toHaveText('Todžė');
    }

    async assertText(locator, textToContain) {
        await expect(this.page.locator(locator)).toContainText(textToContain);
    }
}

module.exports = { LunchPage };