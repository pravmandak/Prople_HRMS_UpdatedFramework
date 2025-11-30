export class DashboardPage   {
constructor(page){

this.page = page;
this.dashboardheader = page.getByRole('heading', { name: 'Dashboard' });
this.userdropdown = page.getByRole('button', { name: 'Praveen M' });
this.logoutbutton = page.getByRole('link', { name: 'Logout' });   }

async verifyDashboardPage(){
    await this.dashboardheader.waitFor();
}          
async logoutApplication(){
    await this.userdropdown.click();
    await this.logoutbutton.click();
    

}}  