Feature: Login Functionality

Background:
   Given user navigate to url "https://www.saucedemo.com/"

@smoke
 Scenario: Login with valid credentials
 When user enter username as "standard_user"
 When user enter password as "secret_sauce"
 When user click on login button
 Then application navigate on next page 


Scenario Outline: Login with invalid credentials password
 When user enter username as "<username>"
 When user enter password as "<passowrd>"
 When user click on login button
 Then application shows appropriate error message 

Examples:
        |username|password|
        |STANDARD_USER|secrete_sauce|
        |standard_user|SECRET_SAUCE|
        |STANDARD_USER|SECRET_SAUCE|
      
