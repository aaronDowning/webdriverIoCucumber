const { Given, When, Then } = require('@wdio/cucumber-framework');
const { LoginPage, productTitle }= require('../pageobjects/login.page');


Given(/^user is on the login page$/, async () => {
    await LoginPage.open();
});

When(/^user enters (.*) and password$/, async (username) => {
    await LoginPage.inputUsername.setValue(username)
    await LoginPage.inputPassword.setValue('secret_sauce')
});

When(/^clicks on login button$/, async () => {
    await LoginPage.btnSubmit.click();
});

//To-Do: Fix this incorrectly exported productTitle object later
Then(/^user sees the Products title$/, async () => {
    await expect(LoginPage.title).toHaveTextContaining(productTitle);
});
