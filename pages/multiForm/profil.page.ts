import {$} from "protractor";

export class ProfilPage {

    private inputName = $('[ng-model="formData.name"]');
    private inputEmail = $('[ng-model="formData.email"]');
    public buttonNextSection = $('[ui-sref="form.interests"]');

    async completeInterestForm(keyName, keyEmail) {
        await this.inputName.sendKeys(keyName);
        await this.inputEmail.sendKeys(keyEmail);
        await this.buttonNextSection.click();
    }
}

