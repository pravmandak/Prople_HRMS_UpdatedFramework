import { test, expect } from '@playwright/test';


test('TC_02 Login to applications ', async ({page}) => {
  const data = test.info().config.use.testData;
        await page.goto(testData.url);
        await page.getByPlaceholder('john@company.com').fill(testData.UserName);
        await page.getByPlaceholder('••••••••').fill(testData.Password);
        await page.getByRole('button', { name: 'Sign In' }).click(); 
   
});


