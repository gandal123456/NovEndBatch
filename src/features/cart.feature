Feature: Shopping Cart

Background:
Given user navigate to url "https://www.saucedemo.com/"
Given user enter username as "standard_user"
Given user enter password as "secret_sauce"
Given user click on the login button

@Regression
Scenario: Add a product to the cart
When user click on add to cart                
When user click on cart icon                 
Then product added in the cart               

@Regression
Scenario: Remove a product from the cart
When user click on add to cart
When user click on cart icon
When user click on remove                    
Then product removed from the cart         