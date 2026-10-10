
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
    test('TC02 - Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory.html/);
        await expect(page.getByText('Products', { exact: true })).toBeVisible();
    });

    test('TC06 - Login with incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'wrong_password');

        await expect(page.locator('[data-test="error"]'))
            .toContainText('Username and password do not match any user in this service');
    });

    test('TC07 - Login with unregistered username', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('unregistered_user', 'secret_sauce');

        await expect(page.locator('[data-test="error"]'))
            .toContainText('Username and password do not match any user in this service');
    });
});