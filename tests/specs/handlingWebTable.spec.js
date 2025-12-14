// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const tableName = await page.locator('xpath=//table[@name="courses"]//tbody');
  const rows = tableName.locator('tr');
  const rowCount = await rows.count();  //11
  
  //how to count columns
  const firstRowColumnscount = await rows.nth(0).locator('th').count();
  console.log(`Number of columns in 1st row : ${firstRowColumnscount}`);

  //How to know total no of columns in each row
  for(let i=0; i<rowCount; i++){
    const rowData = await rows.nth(i).locator('td, th');
    const colCount = await rowData.count();
    console.log('No of columns in Row :' + i + '  '+  colCount);
  }



  
});





