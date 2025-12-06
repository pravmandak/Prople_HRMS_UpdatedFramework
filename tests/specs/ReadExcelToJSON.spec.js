import { test, expect } from '@playwright/test';
const fs = require('fs');
const XLSX = require('xlsx');

function readExcelToJSON(filePath, sheetName) {

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
}


test('TC_01 Login to application ', async ({page}) => {
    const excelData = readExcelToJSON('C:\\AutomationWork\\Praveen_FW\\testData\\TestData.xlsx','Sheet1');

    for (const row of excelData) {
        const url = row['URL'];
        const username = row['UserName'];
        const password = row['Password'];
        const ssn = row['SSN'];

        await page.goto(url);
        await page.getByPlaceholder('john@company.com').fill(username);
        await page.getByPlaceholder('••••••••').fill(password);
        await page.getByRole('button', { name: 'Sign In' }).click(); 
       
    }
});
test('TC_02 Dashboar Data Validation ', async ({page}) => {
    const excelData = readExcelToJSON('C:\\AutomationWork\\Praveen_FW\\testData\\TestData.xlsx','Sheet2');

    for (const row of excelData) {
        const url = row['URL'];
        const username = row['UserName'];
        const password = row['Password'];
        const clockINTime = row['ClockIN'];
        const clockINOut = row['ClockOut'];

        await page.goto(url);
        await page.getByPlaceholder('john@company.com').fill(username);
        await page.getByPlaceholder('••••••••').fill(password);
        await page.getByRole('button', { name: 'Sign In' }).click(); 
       
    }
});

