import { test, expect } from '@playwright/test';

test('DashBoard Profile Verification', async ({ page }) => {
  await page.goto('https://prople.pro//login\'');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).fill('Praveen.m@spearsoftech.com');
  await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).fill('Vihansh77**');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Yes, Log me in here' }).click();
  await page.getByRole('button', { name: 'M', exact: true }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('heading', { name: 'Manda Praveen Kumar' }).click();
  await page.getByRole('heading', { name: 'Manda Praveen Kumar' }).dblclick();
  await page.getByText('praveen.m@spearsoftech.com').click();
  await page.getByText('ID: SSTC028').click();
  await page.getByText('Manda Praveen KumarUFT').click();
  await page.getByRole('heading', { name: 'Manda Praveen Kumar' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
    
});