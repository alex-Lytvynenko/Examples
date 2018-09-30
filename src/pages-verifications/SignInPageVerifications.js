import DefaultPageVerifications from './DefaultPageVerifications';
import step from '../utils/StepDecorator';
import { amazon } from '../model/Constants';
import Element from '../components/Element';

export default class SignInPageVerifications extends DefaultPageVerifications {
    @step(`Verify that logo is visible and has ${amazon} text`)
    logoIsVisible() {
        const logoText = Element.of('.a-icon.a-icon-logo').getAttributeValue('aria-label');
        expect(logoText).to.equal(amazon);
        return this;
    }

    @step(email => `Previously entered ${email} email is visible`)
    correctEnteredEmailIsDisplaued(email) {
        Element.of('.a-row.a-spacing-base span').shouldHaveText(email);
        return this;
    }
}
