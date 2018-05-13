const addUserFunc = require("../functions/add.user.functions");
const webTablesPage = require("../pages/webTables/webTables.page");
const user = require("../data/new.user.info");
const formAddEditUser = require("../pages/webTables/formAddEditUser");

describe('work with WebTables', function () {

    beforeEach(async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    });

    it('should add new user', async function () {
        await addUserFunc.addUser(user.newUserInfo.newUserInfo);
        expect(await webTablesPage.getCurrentUserName()).toContain(user.newUserInfo.newUserInfo.username);
    });

    it('should edit last user', async function () {
        await webTablesPage.editUser(user.newUserInfo.changedUserName);
        expect(await webTablesPage.getCurrentUserName()).toContain(user.newUserInfo.changedUserName);
    });

    it('should delete last user', async function () {
        await webTablesPage.deleteUser();
        expect(await webTablesPage.getCurrentUserName()).toContain('sale');
    });

});
