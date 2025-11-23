// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const tableName = await page.locator('table[name="courses"] tbody tr');
  const rowNum = await tableName.count();
  await console.log("Number of rows in the table: " + rowNum);
  
});


