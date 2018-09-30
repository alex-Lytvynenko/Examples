import landingPage from '../pages/LandingPage';
import onLandingPage from '../pages-verifications/LandingPageVerifications';
import signInPage from '../pages/SignInPage';
import onSignInPage from '../pages-verifications/SignInPageVerifications';
import { open, at } from '../utils/PageFactory';
import { assertThat } from '../utils/AssertThat';
import { helloUsername, password, userName } from '../model/Constants';

describe('Amazon: Log in', () => {
    beforeEach(() => {
        open(landingPage);
        assertThat(onLandingPage)
            .logoIsVisible()
            .takeALookNavBarIsVisible()
            .searchBarIsPresent();
    });

    it('Verify that user can Sign In successfully', () => {
        at(landingPage)
            .hoverOverAccountsDropdown()
            .clickSignInButton();
        assertThat(onSignInPage).logoIsVisible();
        at(signInPage)
            .fillEmailField(userName)
            .clickContinueButton();
        assertThat(onSignInPage).correctEnteredEmailIsDisplaued(userName);
        at(signInPage)
            .fillPasswordField(password)
            .clickSignInButton();
        assertThat(onLandingPage).signInButtonIsChangedToHelloUsername(helloUsername);
    });
});
