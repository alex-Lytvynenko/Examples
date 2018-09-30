// @flow
import Page from '../pages/BasePage';

// this function will return a new instance of a passed class
export function assertThat<T: Page>(Page: T): T {
    return new Page();
}
