
class MyInfo {
    constructor(page) {
        this.page = page;

        this.MyInfoLink = page.locator('//a[normalize-space()="My Info"]');
        this.empImg = page.locator('//img[@class="employee-image"]');
        this.selecttPhoto = page.locator('//img[@src="/web/images/default-photo.png"]');
        this.submitButton = page.getByRole('button', { name: 'Save' });
        this.Successmsg = page.locator('//*[@id="oxd-toaster_1"]/div/div[1]/div[2]/p[2]');
        this.PersonalDetails = page.locator('//a[normalize-space()="Personal Details"]');
        this.OtherID = page.locator('//input[@class="oxd-input oxd-input--focus"]');
        this.LicExpDate = page.locator("(//input[@placeholder='yyyy-dd-mm'])[1]");
        this.Nationality = page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]');
        this.MaritialStatus = page.locator('//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]//div[2]//div[1]//div[2]//div[1]//div[1]//div[1]');
        this.DOB = page.locator("(//input[@placeholder='yyyy-dd-mm'])[2]");
        this.Gender = page.locator("//input[@value='1']");
        this.Savebtn = page.locator("(//button[@type='submit'][normalize-space()='Save'])[1]");
    }

    async gotoMyInfo() {
        await this.MyInfoLink.click();
        await this.empImg.waitFor({ state: 'visible' });
        await this.empImg.click();
        // Locate the actual file input
        await this.selecttPhoto.click();
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(
        'C:\\Users\\daran\\OneDrive\\Documents\\rb_153820.png');
        await this.page.keyboard.press('Enter');
        await this.submitButton.waitFor({ state: 'visible' });
        await this.submitButton.click();
        await this.page.waitForTimeout(5000); // Wait for 2 seconds to allow the success message to appear
        //Click Personal Details
        await this.PersonalDetails.click();
    }
    async PersonalDetailsData(){
        await this.OtherID.fill();
        await this.LicExpDate.fill();
        await this.Nationality.SelectOption();
        await this.MaritialStatus.SelectOption();
        await this.DOB.fill();
        await this.Gender.check();
        await this.Savebtn.click();

    }
}

module.exports = { MyInfo };