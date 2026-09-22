//Dropdown
async function selectDropdown(page, dropdownLocator, optionText) {
  await dropdownLocator.click();
  await page.getByRole('option', { name: optionText }).click();
}
module.exports ={selectDropdown};