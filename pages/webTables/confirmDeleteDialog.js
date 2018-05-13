class ConfirmDeleteDialog {
    constructor() {
        this.buttonOkDelete = $$('[ng-click="close(btn.result)"]').get(1);
        this.modalConfirmDialog = element(by.css('.modal'));
    }

    async clickOkDeleteButton() {
        await this.buttonOkDelete.click();
    }
}

module.exports = new ConfirmDeleteDialog();