import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { FinancePage } from '../pages/FinancePage';

test.only('verify LeaveRequestPage functionality', async ({ page }) => {

    const login = new LoginPage(page);
    const financepage = new LeaveRequestPage(page);

    await login.launchApplication();
    await login.loginApplication();
    await financepage.FinanceFuctionality();
    await financepage.payrolllinkFunction();
    await leaveReqPage.verifyLeaveButtons();
    await leaveReqPage.logoutFunctionality();
    
    
});