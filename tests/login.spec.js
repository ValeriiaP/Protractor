const homePage = require("../pages/registration/home.page");
const credentials = require("../data/user.login.info");
const loginFunctions = require("../functions/login.functions");
const loginPage = require("../pages/registration/login.page");

describe('registration forms completed, submitted, logout', function () {
    const validUser = credentials.credentials.validUser,
        invalidUser = credentials.credentials.invalidUser;
    beforeEach(async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    it('success authorization, should navigate to home page if filled valid user info', async function () {
        await loginFunctions.login(validUser.username, validUser.password, validUser.username);

        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/registeration/#/');
    });

    it('success authorization, should navigate to home page if filled valid username, valid password and distinctive username description', async function () {
        await loginFunctions.login(validUser.username, validUser.password, invalidUser.username);

        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/registeration/#/');
    });

    it('rejected authorization, should display an error if filled invalid username and valid password', async function () {
        await loginFunctions.login(invalidUser.username, validUser.password, invalidUser.username);

        expect(await loginPage.errorInvalidAuthLocator.isPresent()).toBe(true);
        expect(await loginPage.errorInvalidAuthLocator.getText()).toEqual(loginPage.errorMessageInvalidUsernamePass);
    });

    it('rejected authorization, should display an error if filled valid username, invalid password', async function () {
        await loginFunctions.login(validUser.username, invalidUser.password, validUser.username);

        expect(await loginPage.errorInvalidAuthLocator.isPresent()).toBe(true);
        expect(await loginPage.errorInvalidAuthLocator.getText()).toEqual(loginPage.errorMessageInvalidUsernamePass);
    });

    it('rejected authorization, should display an error if filled invalid username and invalid password (changed place)', async function () {
        await loginFunctions.login(validUser.password, validUser.username, validUser.username);

        expect(await loginPage.errorInvalidAuthLocator.isPresent()).toBe(true);
        expect(await loginPage.errorInvalidAuthLocator.getText()).toEqual(loginPage.errorMessageInvalidUsernamePass);
    });

    it('should disable button Login if the username description shorter than 3 signs', async function () {
        await loginFunctions.login(validUser.username, validUser.password, invalidUser.shortUsername);

        expect(await loginPage.buttonLogin.isDisplayed()).toBe(true);
    });

    it('should display an error if the username field is empty', async function () {
        await loginFunctions.login('', validUser.password, validUser.username);

        expect(await loginPage.errorSkippedUsername.isPresent()).toBe(true, 'error message should be shown when username is empty');
        expect(await loginPage.errorSkippedUsername.getText()).toEqual(loginPage.errorMessageEmptyUsername);
    });

    it('should logout current user', async function () {
        await loginFunctions.login(validUser.username, validUser.password, validUser.username);
        await homePage.logout();

        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    })
});
