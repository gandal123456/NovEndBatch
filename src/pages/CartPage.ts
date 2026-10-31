import { BasePage } from "./BasePage";
import {Page} from "@playwright/test";
import locator from "../locators/locators.json";

export class CartPage extends BasePage
{
      constructor(page:Page)
       {
          super(page);
       }

       async clickAdd()
       {
        await this.click(locator.cart.add);
       }
 
        async clickIcon()
        {
            await this.click(locator.cart.icon);
        }

        async verifyCart()
        {
           await this.verifyElement(locator.cart.addedProduct); 
        }

         async clickRemove()
        {
            await this.click(locator.cart.remove);
        }

        async verifyCartEmpty()
        {
            await this.verifyEmpty(locator.cart.cartEmpty);
        }
}