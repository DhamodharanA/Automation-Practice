const { test } = require('@playwright/test');
const fs = require('fs');

test('login', async ({ page }) => {

    await page.goto('/');

    await page.getByPlaceholder('Username').fill(process.env.USER_NAME_2);
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD_2);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL(/dashboard/);

    fs.mkdirSync('playwright/.auth', { recursive: true });
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});