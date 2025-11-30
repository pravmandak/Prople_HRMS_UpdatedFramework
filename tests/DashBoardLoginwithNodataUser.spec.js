import { test, expect } from '@playwright/test';

test('DashBoard Login with No Data User', async ({ page }) => {
  await page.goto('https://prople.pro//login\'');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).fill('ccsatyatest9@gmail.com');
  await page.getByRole('textbox', { name: 'john@company.com' }).press('Tab');
  await page.getByRole('textbox', { name: '••••••••' }).fill('SatyAKotA1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Forgot Password?').click();
  await page.getByRole('textbox', { name: 'Professional Email Address' }).click();
  await page.getByRole('textbox', { name: 'Professional Email Address' }).fill('ccsatyatest9@gmail.com');
  await page.getByRole('button', { name: 'Send Password' }).click();
  await page.getByRole('button', { name: 'Send Password' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
});