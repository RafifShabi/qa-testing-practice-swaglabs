import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC08 - Verify Products page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
});


test('TC11 - Sort products by name A to Z', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.sortByNameAtoZ();

    const productNames = await page.locator('.inventory_item_name').allTextContents();

    expect(productNames).toEqual([...productNames].sort());
});

test('TC13 - Sort products by price low to high', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.sortByPriceLowToHigh();

    const productPrices = await page.locator('.inventory_item_price').allTextContents();

    const actualPrices = productPrices.map(price => Number(price.replace('$', '')));

    expect(actualPrices).toEqual([...actualPrices].sort((a, b) => a - b));
});

test('TC15 - Add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart('Sauce Labs Backpack');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});