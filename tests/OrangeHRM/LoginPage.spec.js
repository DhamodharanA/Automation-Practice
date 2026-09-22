const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { readExcel } = require('../../utils/excelUtils');

test.use({ storageState: { cookies: [], origins: [] } });

const data = readExcel('OrangeHRM_Login_TestData.xlsx', 'Sheet1');
test.describe('Login Page Tests', () => {
    for (const data1 of data) {
        test(`${data1.TC_ID || data1.TestType} Login`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.gotoLoginPage();
            const username = data1.Username === 'empty' ? '' : data1.Username || '';
            const password = data1.Password === 'empty' ? '' : data1.Password || '';
            await loginPage.login(username, password);

            if (data1.TestType === 'Positive') {
                await expect(page).toHaveURL(/dashboard/);
                await loginPage.logout();
            } else {
                await expect(page.getByText(data1.ExpectedResult).first()).toBeVisible();
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
