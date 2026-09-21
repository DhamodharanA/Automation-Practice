
const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async gotoDashboard() {
    await this.page.goto(process.env.DASHBOARD_URL);
    await expect(this.page).toHaveURL(process.env.DASHBOARD_URL);

    const dashboardHeader = this.page.locator('//h6[normalize-space()="Dashboard"]');
    await expect(dashboardHeader).toBeVisible();
}
}
    
module.exports = { DashboardPage };