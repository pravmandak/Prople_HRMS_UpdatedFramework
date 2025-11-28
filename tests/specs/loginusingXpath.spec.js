import { test, expect } from '@playwright/test';

test('verify login for prople HRMS', async ({ page }) => {

await page.goto("https://prople.pro/login#/login");
await page.waitForTimeout(5000);
await page.locator('xpath=//input[@name="email"]').fill('praveen.m@spearsoftech.com');
await page.waitForTimeout(5000);
await page.locator('xpath=//input[@name="password"]').fill('Vihansh77**');
await page.waitForTimeout(5000);
await page.locator('xpath=//button[@type="submit"]').click()   ;
await page.locator('xpath=//p[text()="Just ask for the task!"]').isVisible();

});