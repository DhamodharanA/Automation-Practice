
//Dropdown
async function selectDropdown(page, dropdownLocator, optionText) {
  await dropdownLocator.click();
  await page.getByRole('option', { name: optionText }).click();
}


//Date Picker
async function selectDate(dateInputLocator, dateValue) {
  // dateValue format: YYYY-MM-DD
  await dateInputLocator.fill(dateValue);
}


//Radio Button
async function selectRadio(radioLocator) {
  await radioLocator.check();
}

module.exports = {selectDropdown, selectDate, selectRadio};