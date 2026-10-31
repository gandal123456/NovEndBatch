import {Given, When , Then} from "@cucumber/cucumber";
import {page} from "../hooks/hooks";
import {CartPage} from "../pages/CartPage";

  let cart:CartPage;
When('user click on add to cart', async function ()
 {
     cart=new CartPage(page);
     await cart.clickAdd();
});

When('user click on cart icon',async  function () 
{
    await cart.clickIcon();

});

Then('product added in the cart', async function ()
 {
    await cart.verifyCart();

});

When('user click on remove',async function ()
 {
 
      await cart.clickRemove();
});

Then('product removed from the cart', async function () 
{
      await cart.verifyCartEmpty();
});

