import { test, expect } from '@playwright/test';

test('Handling dropdown using loops', async ({ page }) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const dropdown = page.locator("#dropdown-class-example");

const options = await dropdown.locator("option").allTextContents(); 

for(const listData of options){
    const testdata = await  listData.textContent();
    if(testdata === "Option1"){
        console.log("Found the option: " + testdata);
    }
}
});