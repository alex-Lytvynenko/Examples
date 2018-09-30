import Page from './BasePage';
import Element from '../components/Element';
import step from '../utils/StepDecorator';

export default class SignInPage extends Page {
    @step(email => `Fill Email field with ${email}`)
    fillEmailField(email) {
        Element.of('#ap_email').enterValue(email);
        return this;
    }

    fillPasswordField(password) {
        Element.of('#ap_password').enterValue(password);
        return this;
    }

    @step('Click Continue button')
    clickContinueButton() {
        Element.of('#continue').click();
        return this;
    }

    @step('Click Sign In button')
    clickSignInButton() {
        Element.of('#signInSubmit').click();
    }
}
