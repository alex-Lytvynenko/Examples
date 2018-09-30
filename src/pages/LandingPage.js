import Element from '../components/Element';
import step from '../utils/StepDecorator';
import Page from './BasePage';

export default class LandingPage extends Page {
    open() {
        return super.open('/');
    }

    @step('Hover over Accounts & Lists dropdown')
    hoverOverAccountsDropdown() {
        Element.of('#nav-link-accountList').hoverOver();
        return this;
    }

    @step('Click Sign In button')
    clickSignInButton() {
        Element.of('.nav-action-inner').click();
        return this;
    }

    @step('Focus Search field')
    clickSearchField() {
        Element.of('#twotabsearchtextbox').click();
        return this;
    }

    @step(text => `Fill search field with ${text}`)
    typeIntoSearchField(text) {
        Element.of('#twotabsearchtextbox').enterValue(text);
        return this;
    }

    @step(text => `Select ${text} element from Search field dropdown`)
    selectFromSearchFieldDropdown(text) {
        Element.of(`//div[@id='suggestions']//span[text()='${text}']`).click();
        return this;
    }
}
