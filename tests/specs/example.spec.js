import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://prople.pro/#/login');
  await page.getByRole('textbox', { name: 'john@company.com' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).fill('Praveen.m@spearsoftech.com');
  await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).press('CapsLock');
  await page.getByRole('textbox', { name: '••••••••' }).fill('V');
  await page.getByRole('textbox', { name: '••••••••' }).press('CapsLock');
  await page.getByRole('textbox', { name: '••••••••' }).fill('Vihansh77**');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Yes, Log me in here' }).click();
  await page.getByRole('button', { name: 'Clock In' }).click();
  await page.getByRole('dialog', { name: 'Clock In - 10:19:36 AM' }).click();
  await page.getByRole('button', { name: 'Send A Message' }).click();
  await page.getByRole('dialog', { name: 'Send Message' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('textbox', { name: 'Write your post here...' }).click();
  await page.getByRole('button', { name: 'Post' }).click();
});