import {browser} from "protractor";
import {ProfilPage} from "../pages/multiForm/profil.page";
import {PreviewPage} from "../pages/multiForm/preview.page";
import {InterestsPage} from "../pages/multiForm/interests.page";


describe('work with MultiForm', () => {

    let profileForm = new ProfilPage();
    let interestChoice = new InterestsPage();
    let previewText = new PreviewPage();

    beforeEach(async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile')
    });

    it('should ', async () => {
        await profileForm.completeInterestForm('jane', 'jane@gg.com');
        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests');

        await interestChoice.fillInterestForm();
        expect(await previewText.getPreview()).toBe('ps')

    });

    xit('should to navigate to profile form, interest, payment ', async() => {
        await previewText.navigateToInterest();
        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests');

        await previewText.navigateToProfile();
        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');

        await previewText.navigateToPayment();
        expect(await browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment');

    });

})