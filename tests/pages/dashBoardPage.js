exports.DashBoardPage = 
class DashBoardPage {

    constructor(page) {
     this.page = page;
     
     
      //this.time = page.locator("['text-4xl md:text-5xl font-bold font-mono tabular-nums']");
      //this.day = page.getByText('Monday');
     this.nametxt = page.getByText('Manda Praveen Kumar');
     this.needHelpTxt = page.getByText('Need Help?');
     this.jstAskTxt=page.getByText('Just ask for the task!');
     // this.status = page.getByText('Status');
      //this.clockOut = page.getByText('Clocked Out');
      this.totalhours = page.getByText('Total Hours');
      //this.totalHoursNum = page.getByText('10:53:31');
      this.offline = page.getByText('Offline');
      this.text = page.getByText('Please clock in to start your workday. Make sure to follow the attendance policy.');
      this.clockInButton = page.getByRole('button', { name: 'Clock In' });
      this.cancelBtn = page.getByRole('button',{name:'Cancel'});
      this.policyLink = page.getByText('Policy');

      this.createposttext = page.getByRole('heading',{name : 'Create Post' });
      this.sendMsgBtn = page.getByRole('button',{name:'Send A Message'});
      this.cancelsensmsgbtn = page.getByRole('button',{name:'Cancel'});
      this.textarea = page.getByPlaceholder('Write your post here...');
      this.postBtn = page.getByRole('button',{name:'Post'});

      this.wfhRequestTxt = page.getByText('My WFH Requests');
      this.newReqBtn = page.getByText('+ New Request');
      this.showingTxt = page.getByText('Showing');
      this.nametxt= page.getByRole('button', { name: 'M', exact: true })
      this.logoutbtn= page.getByRole('button', { name: 'Logout' });
      this.yeslogoutBtn= page.getByRole('button', { name: 'Yes, Logout' });
      

    }
    async url(){
    await this.page.goto(' https://prople.pro/#/login');
    }

    async verifyClockInButton(){
      await this.nametxt.isVisible();
      await this.needHelpTxt.isVisible();
      await this.jstAskTxt.isVisible();
      //await this.status.isVisible();
      //await this.clockOut.isVisible();
      await this.totalhours.isVisible();
      //await this.totalHoursNum.isVisible();
      await this.offline.isVisible();
      await this.text.isVisible();
      await this.clockInButton.click();
      await this.cancelBtn.click();
      //await this.policyLink.click();
    }
    async verifyCreatePostReq(){
      await this.createposttext.isVisible();
      await this.sendMsgBtn.click();
      await this.textarea.fill('iam navya');
      await this.postBtn.click();
    }
    async verifyLogoutFunc(){
      await this.nametxt.click();
      await this.logoutbtn.click();
      await this.yeslogoutBtn.click();
     
    }

}