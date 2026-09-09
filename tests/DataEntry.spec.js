const { test, expect } = require('@playwright/test');
const DataEntryPage = require('../pages/DataEntryForm');

test.describe('Data Entry Page Tests', () => {
  test('fills the data entry form', async ({ page }) => {
    const dataEntryPage = new DataEntryPage(page);
    await dataEntryPage.goToDataEntryPage();
    await dataEntryPage.fillForm('John Doe', 'sample.123@ymail.com', '9633215478', 'Address121');

    await expect(page.locator('#name')).toHaveValue('John Doe');
  });
});


