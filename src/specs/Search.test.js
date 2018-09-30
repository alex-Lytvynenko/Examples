import landingPage from '../pages/LandingPage';
import onLandingPage from '../pages-verifications/LandingPageVerifications';
import onSignInPage from '../pages-verifications/SignInPageVerifications';
import { open, at } from '../utils/PageFactory';
import { assertThat } from '../utils/AssertThat';
import { booksCategory, javaScriptTheDefinitiveGuideBook, searchBy } from '../model/Constants';
import resultsPage from '../pages/ResultsPage';
import onResultsPage from '../pages-verifications/ResultsPageVerifications';

describe('Amazon: Search', () => {
    beforeEach(() => {
        open(landingPage);
        assertThat(onLandingPage)
            .logoIsVisible()
            .takeALookNavBarIsVisible()
            .searchBarIsPresent();
    });

    it(`Verify that user can search for ${searchBy}`, () => {
        at(landingPage)
            .typeIntoSearchField(searchBy)
            .selectFromSearchFieldDropdown(booksCategory);
        assertThat(onSignInPage).searchBarHasSearchedByText(searchBy);
        const uiBookInfo = at(resultsPage).getBookInfo();
        assertThat(onResultsPage).bookHasCorrectInfo(uiBookInfo, javaScriptTheDefinitiveGuideBook);
    });
});
