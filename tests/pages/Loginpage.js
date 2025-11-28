export class LoginPage {
constructor(page){

this.page = page;
this.loginbutton = page.getByRole('link', { name: 'Login' })
this.emailtextbox =page.getByRole('textbox', { name: 'john@company.com' })
//this.emailtextbox =page.getByplaceholder("john@company.com")
//this.passwordtextbox = page.getByRole('textbox', {type: 'password'});
this.password = page.getByRole('textbox',{name:'••••••••'});
//this.signinbutton =page.getbytext('Sign In');
//this.signinbutton = page.getByRole('button',{type:'submit'});
this.signinbutton = page.getByRole('button', { name: 'Sign In' });
//this.signinbutton = page.getByRole('button',{text: "Sign In"});
this.logmeinBtn = page.getByText('Yes, Log me in here');



}
async launchApplication(){
    await this.page.goto('https://prople.pro//login');
}
async loginApplication(){
await this.loginbutton.click();
await this.emailtextbox.fill('Praveen.m@spearsoftech.com');
await this.password.fill('Vihansh77**');
await this.signinbutton.click();
if (await this.logmeinBtn.isVisible()) {
    await this.logmeinBtn.click();
}

}
}