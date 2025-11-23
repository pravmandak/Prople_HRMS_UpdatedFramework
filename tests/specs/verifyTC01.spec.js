// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  test.slow();  //defult time 3 times ....
  test.setTimeout(10000); // set time 10 sec
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('praveentest');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('hello@123');
  await page.locator('label').nth(3).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
});


