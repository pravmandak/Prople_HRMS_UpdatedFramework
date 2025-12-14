// @ts-check
import { test, expect } from '@playwright/test';
import { clear } from 'console';

test('has title', async ({ page }) => {
try{
 await page.goto('https://rahulshettyacad');
  const tableName = await page.locator('xpath=//ta');
  
  for(let i=0; i< await tableName.count(); i++){
    const rowData = await tableName.nth(i).locator('td').allTextContents();
    console.log(rowData);
  }
}catch(error){
  console.error('Error while handling web table:', error);
}


finally{
await console.log('nEXT STEPS AFTER THE Webtable data printed');
let name = 'Hello World';
await console.log(name);
}

});











