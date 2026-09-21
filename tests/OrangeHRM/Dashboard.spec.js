const{test,expect}=require('@playwright/test');
const { DashboardPage } = require('../../pages/DashBoardPage'); 
 
 
 test('should navigate to dashboard page after login', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.gotoDashboard();
    });
