import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test.describe('verify the regression suite ', () => {

test.beforeAll( async () => {
  await page.goto("https://prople.pro/login#/login");
});

test.beforeEach( async ({page}) => {
  await page.TIMEOUT(5000);
  await page.getByRole('textbox', { name: 'john@company.com' }).click();
  await page.getByRole('textbox', { name: 'john@company.com' }).fill('praveen.m@spearsoftech.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: '••••••••' }).click();
  await page.getByRole('textbox', { name: '••••••••' }).fill('Vihansh77**');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.TIMEOUT(5000);
});

test('Verify Dashboard page navigation', async ({ page }) => {
await page.getByRole('link', { name: 'Dashboard' }).isVisible();
});

test('verify Leave Request page navigation', async ({ page }) => {
await page.getByRole('link', { name: 'Leave Requests' }).click();
await page.getByRole('heading', { name: 'My Leaves' }).isVisible();

});

test('verify Finance Page navication', async ({ page }) => {
await page.getByRole('link', { name: 'Finance' }).click();
await page.getByRole('heading', { name: 'My Finance' }).isVisible();
});


test.afterEach( async ({page}) => {
 
});

test.afterAll( async () => {
  console.log("**** deleting all cookies ****");        

});

});
