import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashBoardPage } from '../pages/DashBoardPage';

test('verify dashboard functionality', async ({ page }) => {

    const login = new LoginPage(page);
    const dashboardpage = new DashBoardPage(page);

    await login.launchApplication();
    await login.loginApplication();
    await dashboardpage.verifyClockInButton();
    await dashboardpage.verifyCreatePostReq();
    await dashboardpage.verifyLogoutFunc();
});