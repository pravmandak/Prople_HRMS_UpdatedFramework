import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeaveRequestPage } from '../pages/LeaveRequestPage';

test.only('verify LeaveRequestPage functionality', async ({ page }) => {

    const login = new LoginPage(page);
    const leaveReqPage = new LeaveRequestPage(page);

    await login.launchApplication();
    await login.loginApplication();
    await leaveReqPage.verifyLeaveRequestBtn();
    await leaveReqPage.verifyLeaveBlocks();
    await leaveReqPage.verifyLeaveButtons();
    //await leaveReqPage.logoutFunctionality();
    
    
});