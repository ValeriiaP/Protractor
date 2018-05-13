const confirmDialog = require("./confirmDeleteDialog");
const formAddEditUser = require("./formAddEditUser");

class WebTablesPage {
    constructor() {
        this.buttonAddUser = $$('[ng-click="pop()"]').get(0);
        this.buttonEditUser = $$('[ng-click="pop()"]').get(1);
        this.buttonDeleteUser = $$('[ng-click="delUser()"]').get(0);
        this.currentUserName = element.all(by.repeater('dataRow in displayedCollection').row(0)).all(by.repeater('column in columns').row(2));

    }

    async clickAddUser() {
        await this.buttonAddUser.click();
    }

    async getCurrentUserName() {
        return this.currentUserName.getText();
    }

    async editUser(newUserName) {
        await this.buttonEditUser.click();
        await formAddEditUser.inputUserName.clear();
        await formAddEditUser.fillUserName(newUserName);
        await formAddEditUser.selectLocker();
        await formAddEditUser.clickSaveUser();

    }

    async deleteUser() {
        await this.buttonDeleteUser.click();
        await confirmDialog.clickOkDeleteButton();

    }
}

module.exports = new WebTablesPage();