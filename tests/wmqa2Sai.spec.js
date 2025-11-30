import { test, expect } from '@playwright/test';

test('Sai QA2 Login', async ({ page }) => {
  await page.goto('https://wmqa2.wm.com/');
  await page.getByTestId('LoginPopover-Button').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ccsatyatest9@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('SatyAKotA1');
  await page.getByTestId('TextInputForm').getByTestId('ButtonPrimary').click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Satya' }).click();
  await page.getByRole('button', { name: 'Satya' }).click();
  await page.getByRole('button', { name: 'Satya' }).click();
});