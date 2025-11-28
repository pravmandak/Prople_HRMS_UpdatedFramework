exports.LeaveRequestPage =
class LeaveRequestPage{
    constructor(page){
        this.page = page;
        this.leaveReqBtn = page.getByText('Leave Requests');
        this.myLeavesHeader = page.getByRole('heading',{name:'My Leaves'});
        this.requestLeaveBtn = page.getByRole('button',{name:'Request Leave'});
        this.closesymbol = page.getByText('Close');
        this.casualLeavetxt = page.getByText('Casual Leaves');
        this.sickLeaveTxt = page.getByText('Sick Leave');
        this.personalLeaveTxt = page.getByText('Personal Leave');
        this.remainingLeaveTxt = page.getByText('Total Remaining');
        this.remaingLeaveNum = page.getByText('00');
        this.Currentlyworkingleave = page.getByText('Currently working leave policy...');
        this.myRequestBtn = page.getByText('My Requests');
        this.MyLeaveRequestsTxt = page.getByText('My Leave Requests');
        this.LeaveBalanceBtn = page.getByText('Leave Balance');
        this.leaveBalanceTxt = page.getByText('Leave Balance Overview');
        this.calendarBtn = page.getByText('Calendar');
        this.LeaveCalendarTxt = page.getByText('Leave Calendar');
        this.HolidaydaysBtn= page.getByRole('tab', { name: 'Holidays' });
        this.CompanyHolidaysTxt=page.getByText('Official company holidays for the current year');
        this.nametxt= page.getByRole('button', { name: 'M', exact: true })
        this.logoutbtn= page.getByRole('button', { name: 'Logout' });
        this.yeslogoutBtn= page.getByRole('button', { name: 'Yes, Logout' });
      
    }
    async verifyLeaveRequestBtn(){
      await this.leaveReqBtn.click();
      await this.myLeavesHeader.isVisible(); 
      await this.requestLeaveBtn.click();
      await this.closesymbol.click();
    }
    async verifyLeaveBlocks(){
        await this.casualLeavetxt.isVisible();
        await this.sickLeaveTxt.isVisible();
        await this.personalLeaveTxt.isVisible();
        await this.remainingLeaveTxt.isVisible();
        await this.remaingLeaveNum.isVisible();
        await this.Currentlyworkingleave.isVisible();
       
    }
    async verifyLeaveButtons(){
        await this.myRequestBtn.click();
        await this.MyLeaveRequestsTxt.isVisible();
        await this.LeaveBalanceBtn.click();
        await this.leaveBalanceTxt.isVisible();
        await this.calendarBtn.click();
        await this.LeaveCalendarTxt.isVisible();
        await this.HolidaydaysBtn.click();
        await this.CompanyHolidaysTxt.isVisible();
   }
   async logoutFunctionality(){
    await this.nametxt.click();
    await this.logoutbtn.click();
    await this.yeslogoutBtn.click();
   }
}