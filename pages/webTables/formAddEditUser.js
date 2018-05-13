class FormAddEditUser {
    constructor() {
        this.inputFirstName = element(by.name('FirstName'));
        this.inputLastName = element(by.name('LastName'));
        this.inputUserName = element(by.name('UserName'));
        this.inputPassword = element(by.name('Password'));
        this.radioCustomerAAA = element.all(by.css('.radio input')).first();
        this.radioCustomerBBB = element.all(by.css('.radio input')).last();
        this.selectRoleSalesTeam = $$('option').get(0);
        this.selectRoleCustomer = $$('option').get(1);
        this.selectRoleAdmin = $$('option').get(2);
        this.inputEMail = element(by.name('Email'));
        this.inputCellPhone = element(by.name('Mobilephone'));
        this.buttonSave = $('[ng-click="save(user)"]');
        this.checkboxLocked = element.all(by.model('dataRow[column.map]')).last();
    }

    async fillFirstName(firstName) {
        await this.inputFirstName.sendKeys(firstName);
    }

    async fillLastName(lastName) {
        await this.inputLastName.sendKeys(lastName);
    }

    async fillUserName(userName) {
        await this.inputUserName.sendKeys(userName);
    }

    async fillPassword(password) {
        await this.inputPassword.sendKeys(password);
    }

    async selectCustomer() {
        await this.radioCustomerBBB.click()
        await this.radioCustomerAAA.click();
    }

    async SelectRole() {
        await this.selectRoleSalesTeam.click();
        await this.selectRoleCustomer.click();
        await this.selectRoleAdmin.click();
    }

    async fillEMail(eMail) {
        await this.inputEMail.sendKeys(eMail);
    }

    async fillCellPhone(cellPhone) {
        await this.inputCellPhone.sendKeys(cellPhone);
    }

    async clickSaveUser() {
        await this.buttonSave.click();
    }

    async selectLocker() {
        await this.checkboxLocked.click();

    }

    // async selectLocker() {
    //     if (this.isSelectedChexbox() === false) {
    //         await this.checkboxLocked.click();
    //     }
    //
    // }

    // async isSelectedChexbox() {
    //     return (this.checkboxLocked.isSelected()).toBe(true, 'checkbox is not selected, return false');
    // }
}

module.exports = new FormAddEditUser();