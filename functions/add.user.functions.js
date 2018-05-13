const formAddUser = require("../pages/webTables/formAddEditUser");
const webTablesPage = require("../pages/webTables/webTables.page");


class AddUserFunctions {


    async addUser(userInfo) {

        await webTablesPage.clickAddUser();

        await formAddUser.fillFirstName(userInfo.firstname);
        await formAddUser.fillLastName(userInfo.lastname);
        await formAddUser.fillUserName(userInfo.username);
        await formAddUser.fillPassword(userInfo.pass);
        await formAddUser.selectCustomer();  // todo [] тут можна вибрати обох кастомерів а в тебе захардкоджений один; і напено краще селект кастомер
        await formAddUser.SelectRole(); // todo [] те саме для ролі; в Тайп Скрипти ми б заюзали енум або якісь константи
        await formAddUser.fillEMail(userInfo.email);
        await formAddUser.fillCellPhone(userInfo.phone);
        await formAddUser.clickSaveUser();
    }
}

module.exports = new AddUserFunctions();