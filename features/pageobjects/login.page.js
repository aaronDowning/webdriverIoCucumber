const { $ } = require('@wdio/globals');
const Page = require('./page');


const productTitle = 'Products';

class LoginPage extends Page {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get title () {
        return $('span.title')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}
//To-Do: Fix this incorrectly exported item later
module.exports = {
    LoginPage: new LoginPage(),
    productTitle: productTitle
};
