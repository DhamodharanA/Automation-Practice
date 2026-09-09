const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');


test.describe('Login Page Tests',()=>{
    test('should login with valid credentials',async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('username', 'password');
    });
}); 