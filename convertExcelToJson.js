const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("data.xlsx");




// Get the first sheet name
const sheetName = workbook.SheetNames[0];


// console.log(sheetName,"sheetName")

// Convert the sheet data to JSON
const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Save JSON to a file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));

console.log("Excel data has been converted to JSON and saved as 'data.json'.");
