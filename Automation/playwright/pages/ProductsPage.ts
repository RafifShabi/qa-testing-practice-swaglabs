import { Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async sortByNameAtoZ() {
        await this.page
            .getByRole('combobox')
            .selectOption('az');
    }

    async sortByPriceLowToHigh() {
        await this.page
            .getByRole('combobox')
            .selectOption('lohi');
    }

    async addProductToCart(productName: string) {
    await this.page
        .locator('.inventory_item')
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    }
}