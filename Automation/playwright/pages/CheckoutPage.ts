import { Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async startCheckout() {
        await this.page
            .getByRole('button', { name: 'Checkout' })
            .click();
    }

    async fillInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page
            .getByPlaceholder('First Name')
            .fill(firstName);

        await this.page
            .getByPlaceholder('Last Name')
            .fill(lastName);

        await this.page
            .getByPlaceholder('Zip/Postal Code')
            .fill(postalCode);
    }

    async continueCheckout() {
        await this.page
            .getByRole('button', { name: 'Continue' })
            .click();
    }

    async finishCheckout() {
        await this.page
            .getByRole('button', { name: 'Finish' })
            .click();
    }
}