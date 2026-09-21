const{test,expect}=require('@playwright/test');
const {LoginPage}=require('../../pages/LoginPage');
const {MyInfo}=require('../../pages/MyInfo');
const dotenv=require('dotenv');
dotenv.config();

test.describe('MyLogin',()=> {
    test('should login with valid credentials',async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.USER_NAME2,process.env.PASSWORD2);
        await expect(page).toHaveURL(/dashboard/);
        
    });
});

test.describe('MyInfo',()=> {
    test('should update profile picture',async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.USER_NAME_2,process.env.PASSWORD_2);
        await expect(page).toHaveURL(/dashboard/);
        
        const myInfo=new MyInfo(page);
        await myInfo.gotoMyInfo();
        await expect(myInfo.Successmsg).toHaveText('Successfully Updated');
    });
});