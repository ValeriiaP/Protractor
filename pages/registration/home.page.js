class HomePage {
    constructor() {
        this.buttonLogout = element(by.linkText('Logout'));
    }

    async logout() {
        await this.buttonLogout.click()
    }
}

module.exports  = new HomePage();