const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');

Given(/^user is on the login page$/, async () => {
    await browser.url('https://www.saucedemo.com/')
});

When(/^user enters username and password$/, async () => {
    await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
});

When(/^user enters (.*) and password$/, async (username) => {
    await $('#user-name').setValue(username)
    await $('#password').setValue('secret_sauce')
});


When(/^clicks on login button$/, async () => {
    await $('#login-button').click()
});

Then(/^user sees the Products title$/, async () => {
    await expect($('span.title')).toHaveTextContaining('Products');
});
