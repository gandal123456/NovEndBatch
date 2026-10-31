Feature: Payment to product

Background:
   Given user navigate to url "https://www.saucedemo.com/"

@smoke
 Scenario: Login with valid credentials
 When user enter username as "standard_user"
 When user enter password as "secret_sauce"
 When user click on login button
 Then Do payment