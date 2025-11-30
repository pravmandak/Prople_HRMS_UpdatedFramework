import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wm.com/');
  await page.getByTestId('LoginPopover-Button').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ccsatyatest2@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('SatyAKotA1');
  await page.getByTestId('TextInputForm').getByTestId('ButtonPrimary').click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Satya' }).click();
});