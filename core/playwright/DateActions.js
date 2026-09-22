//Date Picker
async function selectDate1(dateInputLocator, dateValue) {
  // dateValue format: YYYY-MM-DD
  await dateInputLocator.fill(dateValue);
}

async function selectDate(page, dateInputLocator, dateValue) {
  // dateValue format: YYYY-MM-DD
  const [year, month, day] = dateValue.split('-').map(Number);
  await dateInputLocator.click();

  await page.click(`.calendar-year-selector >> text=${year}`);
  await page.click(`.calendar-month-selector >> text=${month}`);
  await page.click(`.calendar-day >> text=${day}`);
}

module.exports = {selectDate,selectDate1};