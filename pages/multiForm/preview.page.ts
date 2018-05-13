import {$, by, element} from "protractor";


export class PreviewPage {
    private preview = element(by.tagName('pre'));
    private linkProfile = $('[ui-sref=".profile"]');
    private linkInterest = $('[ui-sref=".interests"]');
    private linkPayment = $('[ui-sref=".payment"]');

    async getPreview() {
        return this.preview.getText();
    }

    async navigateToProfile() {
        await this.linkProfile.click();
    }

    async navigateToInterest() {
        await this.linkInterest.click();
    }

    async navigateToPayment() {
        await this.linkPayment.click();
    }
}

