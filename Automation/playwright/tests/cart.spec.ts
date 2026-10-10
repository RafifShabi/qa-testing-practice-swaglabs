import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('TC20 - Verify cart items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart('Sauce Labs Backpack');
    await cartPage.goto();

    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
});

test('TC23 - Remove product from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart('Sauce Labs Backpack');
    await cartPage.goto();

    await cartPage.removeProduct('Sauce Labs Backpack');

    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});