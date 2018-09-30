import Element from '../components/Element';
import step from '../utils/StepDecorator';
import { amazon } from '../model/Constants';

const searchBar = '#twotabsearchtextbox';

export default class DefaultPageVerifications {
    @step(`Verify that logo is visible and has ${amazon} text`)
    logoIsVisible() {
        Element.of('#nav-logo .nav-sprite.nav-logo-base').shouldHaveText(amazon);
        return this;
    }

    @step('Verify that Top Navigation bar is visible')
    takeALookNavBarIsVisible() {
        Element.of('#nav-upnav').shouldBeVisible();
        return this;
    }

    @step('Verify that Search Bar is visible')
    searchBarIsPresent() {
        Element.of(searchBar).shouldBeVisible();
        return this;
    }

    @step(helloText => `Verify that user is greeted with ${helloText}`)
    signInButtonIsChangedToHelloUsername(helloText) {
        Element.of('#nav-link-accountList .nav-line-1').shouldHaveText(helloText);
        return this;
    }

    @step(text => `Verify that Search field has text: ${text} that was used to search by`)
    searchBarHasSearchedByText(text) {
        const value = Element.of(searchBar).getAttributeValue('value');
        expect(value).to.equal(text);
        return this;
    }
}
