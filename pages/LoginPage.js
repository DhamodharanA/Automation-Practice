

class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
    } 

    async gotoLoginPage() {
        await this.page.goto(process.env.BASE_URL);
    }           

    async login(username, password) {
        await this.usernameInput.fill(process.env.USER_NAME);
        await this.passwordInput.fill(process.env.PASSWORD);
        await this.loginButton.click();
    }


}
module.exports = { LoginPage };