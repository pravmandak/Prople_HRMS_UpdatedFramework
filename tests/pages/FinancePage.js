exports.FinancePage = 
class FinancePage {
    constructor(page){
        this.page = page;
        this.FinanceBtn = page.getByText('Finance');
        this.MyfinanceTxt = page.getByText('My Finance');
        this.financeTxt = page.getByText('View salary details and manage expenses');
        this.submitExpressBtn = page.getByRole('button',{name:'Submit Expense'});
        this.cancelBtn = page.getByText('Cancel');
        this.payrolllink = page.getByText('Payrolls');
        this.PayslipHistoryTxt = page.getByText('Payslip History');
        this.subTxt = page.getByText('Download your previous payslips');

    }
    async FinanceFuctionality(){
        await this.FinanceBtn.click();
        await this.MyfinanceTxt.isVisible();
        await this.financeTxt.isVisible();
        await this.submitExpressBtn.click();
        await this.cancelBtn.click();
    }
    async payrolllinkFunction(){
        await this.payrolllink.click();
        await this.PayslipHistoryTxt.isVisible();
        await this.subTxt.isVisible();


    }
}