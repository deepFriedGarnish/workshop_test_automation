const { expect } = require('@playwright/test');

class LunchPage {
    constructor(page) {
        this.page = page;
    }

    // Navigates to wanted page
    async navigate() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    // Logins into the specified account
    async login(email, password) {
        await this.page.locator(`input[name='email']`).type(email);
        await this.page.locator(`input[name='password']`).type(password);
        await this.page.locator('.v-btn').click();
    }

    // Selects the first item to order from the list
    async selectFirstItem() {
        await this.page.locator('.v-list__group__header').first().click();
        await this.page.locator('.v-list__group__header--active .v-list__tile').first().click();
        await this.page.locator('.v-card--hover').first().click();
    }

    // Asserts whether the textToContain exists at given locator
    async assertText(locator, textToContain) {
        await expect(this.page.locator(locator)).toContainText(textToContain);
    }

    // Asserts whether an item exists in the cart
    async assertFirstItemInCart() {
        await expect(this.page.locator('.v-chip__content')).not.toBeEmpty();
    }
}

module.exports = { LunchPage };