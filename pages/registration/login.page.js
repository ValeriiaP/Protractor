class LoginPage {

    constructor() {
        this.inputUsername = element(by.model('Auth.user.name'));
        this.inputPassword = element(by.model('Auth.user.password'));
        this.inputUsernameDescription = element(by.model('model[options.key]'));
        this.buttonLogin = $('[ng-click="Auth.login()"]');
        this.errorInvalidAuthLocator = $('[ng-if="Auth.error"]');
        this.errorSkippedUsername = $$('[ng-messages="form.username.$error"').$$('[ng-message="required"]');
        this.errorMessageInvalidUsernamePass = 'Username or password is incorrect';
        this.errorMessageEmptyUsername = ['You did not enter a username'];

    }

    async fillUserName(userName) {
        await this.inputUsername.sendKeys(userName);
    }

    async fillPassword(password) {
        await this.inputPassword.sendKeys(password);
    }

    async fillUserNameDescription(userNameDescription) {
        await this.inputUsernameDescription.sendKeys(userNameDescription);
    }

    async clickLogin() {
        await this.buttonLogin.click();
    }

}

module.exports = new LoginPage();