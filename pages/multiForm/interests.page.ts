import {$} from "protractor";


export class InterestsPage{
    private radioXBOX = $('[value="xbox"]');
    private radioPS4 = $('[value="ps"]');
    private buttonNextSection = $('[ui-sref="form.payment"]');

    async fillInterestForm(){
        await this.radioXBOX.click();
        await this.radioPS4.click();
        await this.buttonNextSection.click();
    }

}