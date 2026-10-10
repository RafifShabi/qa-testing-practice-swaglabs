import { Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
  
    async goto() {
        await this.page
            .getByRole('button', { name: /Cart/ })
            .click();
    }

    async removeProduct(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Remove' })
            .click();
    }
}