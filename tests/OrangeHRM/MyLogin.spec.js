const{test,expect}=require('@playwright/test');
const {LoginPage}=require('../../pages/LoginPage');
const {MyInfo}=require('../../pages/MyInfo');
const { selectDate, selectDropdown, selectRadio } =
    require('../../utils/CommonUtils');
const dotenv=require('dotenv');
const { utils } = require('xlsx');
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
        //await expect(myInfo.Successmsg).toHaveText('Successfully Updated');
        //await myInfo.OtherID.fill('12345'); //Field have error
        await selectDate(myInfo.LicExpDate, '2026-12-31');
        await selectDropdown(page, myInfo.Nationality, 'Indian');
        await selectDropdown(page, myInfo.MaritialStatus, 'Single');
        //await selectDate(myInfo.DOB, '1995-05-20'); //Field Diabled
        await selectRadio(myInfo.Gender);
        await myInfo.Savebtn.click();

        await expect(page.locator('text=Successfully Saved')).toBeVisible();
    });
    });