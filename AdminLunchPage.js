const { expect } = require('@playwright/test');

class AdminLunchPage {
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
}

module.exports = { AdminLunchPage };