import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('TC28 - Checkout with valid information', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart('Sauce Labs Backpack');
    await cartPage.goto();

    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('Rafif', 'Prasetyo', '40123');
    await checkoutPage.continueCheckout();

    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(
        page.getByText('Thank you for your order!')
    ).toBeVisible();
});