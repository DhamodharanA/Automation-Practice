

class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logo = page.locator('//div[@class="orangehrm-login-branding"]');
        this.VUser = page.locator('//p[normalize-space()="Username : Admin"]');     
        this.VPass = page.locator('//p[normalize-space()="Password : admin123"]');
        this.profileIcon = page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.logoutButton = page.locator('//a[normalize-space()="Logout"]');
        this.Windowlink = page.locator('//div[@class="orangehrm-login-slot-wrapper"]');

    } 
    // First
    async gotoLoginPage() {
        await this.page.context().clearCookies();
        await this.page.evaluate(() => {
            try { localStorage.clear(); } catch (e) {}
            try { sessionStorage.clear(); } catch (e) {}
        });
        await this.page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
        await this.usernameInput.waitFor({ state: 'visible' });
    }
    //Last
    async logout() {
        await this.profileIcon.waitFor({ state: 'visible' });
        await this.profileIcon.click();

        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async logoVisible() {
        await this.logo.waitFor({ state: 'visible' });
    }

    async Windowhandle() {
        await this.Windowlink.click();
    }
}
module.exports = { LoginPage };