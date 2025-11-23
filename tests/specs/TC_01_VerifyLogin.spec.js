import {test,expect}from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
test('Verfiy the login Functionality prople hrms', async ({ page }) => {

const login =new Loginpage(page);
await login.launchApplication();
await page.waitForTimeout(5000);
await login.loginApplication();
await page.waitForTimeout(5000);

});