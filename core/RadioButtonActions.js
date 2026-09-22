//Radio Button
async function selectRadio(radioLocator) {
  await radioLocator.check();
}

module.exports = {selectRadio};
