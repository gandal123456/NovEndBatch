import { BasePage } from "./BasePage";
import {Page} from "@playwright/test";
import locator from "../locators/locators.json";

export class LoginPage extends BasePage
{
      constructor(page:Page)
       {
          super(page);
       }

     async enterUsername(username:string)
     {
        await this.enterText(locator.login.username,username);
     }  

     async enterPassword(password:string)
     {
        await this.enterText(locator.login.password,password);
     }  
   
       async clickLogin()
     {
        await this.click(locator.login.loginBtn);
     }  

      async verifyDashboard()
      {
          await this.verifyElement(locator.login.dashboard);
      }

      async verifyInvalidCredentials()
      {
          await this.verifyElement(locator.login.invalidCredentials);
      }
 
}