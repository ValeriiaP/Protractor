const loginPage = require("../pages/registration/login.page");

class LoginFunctions {

    async login(userName, password, nameDescription) {
        await loginPage.fillUserName(userName);
        await loginPage.fillPassword(password);
        await loginPage.fillUserNameDescription(nameDescription);
        await loginPage.clickLogin();
    }
}

module.exports = new LoginFunctions();