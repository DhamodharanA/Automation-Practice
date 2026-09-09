const { expect } = require('@playwright/test');

class DataEntryPage {
  constructor(page) {
    this.page = page;
    this.nameLabel = page.locator('//label[normalize-space()="Name:"]');
    this.name = page.locator('#name');
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
    this.address = page.locator('#textarea');
  }

  async gotoLaunchPage() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async goToDataEntryPage() {
    await this.gotoLaunchPage();
  }

  async fillForm(name, email, phone, address) {
    
    await expect(this.nameLabel).toBeVisible();
    await this.name.fill(name);
    await this.email.fill(email);
    await this.phone.fill(phone);
    await this.address.fill(address);
  }
}

module.exports = DataEntryPage;