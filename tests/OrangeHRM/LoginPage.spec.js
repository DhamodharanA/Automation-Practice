const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const { LoginPage } = require('../../pages/LoginPage');
const { asyncWrapProviders } = require('node:async_hooks');

test.use({ storageState: { cookies: [], origins: [] } });

const workbook = XLSX.readFile('./test-data/OrangeHRM_Login_TestData.xlsx');
const sheet = workbook.Sheets.Sheet1;
const loginData = XLSX.utils.sheet_to_json(sheet);

test.describe('Login Page Tests', () => {
    for (const data of loginData) {
        test(`${data.TC_ID || data.TestType} Login`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.gotoLoginPage();
            //const username = data.Username === 'empty' ? '' : data.Username || '';
            //const password = data.Password === 'empty' ? '' : data.Password || '';
            await loginPage.login(username, password);

            if (data.TestType === 'Positive') {
                await expect(page).toHaveURL(/dashboard/);
                await loginPage.logout();
            } else {
                await expect(page.getByText(data.ExpectedResult).first()).toBeVisible();
            }
        });
    }
});

test.describe('Logo Visibility Test', () => {
    test('Verify Logo is Visible on Login Page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.logoVisible();
        await expect(loginPage.logo).toBeVisible();
        await expect(loginPage.VUser).toBeVisible();
        await expect(loginPage.VPass).toBeVisible();
        const username = (await loginPage.VUser.textContent()).split(':')[1].trim();
        const password = (await loginPage.VPass.textContent()).split(':')[1].trim();
        console.log(username);
        console.log(password);
        await loginPage.login(username, password);
        await expect(page).toHaveURL(/dashboard/);
        await loginPage.logout();
    });

test.describe('Window Handle', async () => {
    test('Verify Window Handle', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.Windowhandle();
        const pages = page.context().pages();
        console.log(`Number of open pages: ${pages.length}`);
        
    });

});
});
