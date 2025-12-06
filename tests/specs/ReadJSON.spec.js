import { test, expect } from '@playwright/test';
const fs = require('fs');

const loginData = JSON.parse(
  fs.readFileSync('C:\\AutomationWork\\Praveen_FW\\testData\\login.json', 'utf-8')
);

for (const data of loginData) {
test('TC_01 Login to applications ', async ({page}) => {
        const { url, username, password} = data;
        await page.goto(url);
        await page.getByPlaceholder('john@company.com').fill(username);
        await page.getByPlaceholder('••••••••').fill(password);
        await page.getByRole('button', { name: 'Sign In' }).click(); 
   
});
}

