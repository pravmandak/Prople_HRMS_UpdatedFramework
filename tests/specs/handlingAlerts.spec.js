// @ts-check
import { test, expect } from '@playwright/test';
import { parseEnv } from 'util';

test('has title', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 await page.locator('#confirmbtn').click();
 await page.on('dialog', dialog => dialog.dismiss());
 await page.getByText('Radio1').click();
 
});


