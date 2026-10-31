import {Given, When , Then} from "@cucumber/cucumber";
import {page} from "../hooks/hooks";
import {LoginPage} from "../pages/LoginPage";

let login:LoginPage;

Given('user navigate to url {string}', async function (url:string)
 {
       login=new LoginPage(page);
       await login.navigateToUrl(url);
});

When('user enter username as {string}', async function (username:string)
 {
      await login.enterUsername(username);
});

When('user enter password as {string}', async function (password:string)
 {
     await login.enterPassword(password);
});

 When ('user click on login button', async function ()
 {
    await login.clickLogin();

 });

Then('application navigate on next page', async function () 
{
     await login.verifyDashboard();     
         
});

Then('application shows appropriate error message', async function ()
 {
     await login.verifyInvalidCredentials();
});


 When ('user click on the login button', async function ()
 {
    await login.clickLogin();

 });