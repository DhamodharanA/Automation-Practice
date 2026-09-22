
const XLSX = require('xlsx');
const path = require('path');

// Read Excel file
function readExcel(fileName, sheetName) {
    const filePath = path.join(__dirname, '..', 'test-data', fileName);
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found`);
    }
    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
}

module.exports = {
    readExcel
};
