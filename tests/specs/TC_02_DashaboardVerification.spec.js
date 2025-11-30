

import {test,expect}from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { DashboardPage } from '../pages/dashBoardPage';
test('Verfiy the login Functionality prople hrms', async ({ page }) => {

const login =new Loginpage(page);
const dashboard =new DashboardPage(page);
await login.launchApplication();
await page.waitForTimeout(5000);
await login.loginApplication();
await page.waitForTimeout(5000);
await dashboard.verifyDashboardPage();
await page.waitForTimeout(5000);
await dashboard.logoutApplication(); 
await page.waitForTimeout(5000);   

});