import Page from '../pages/BasePage';

// this function will return a new instance of a passed class
// and perform open() function
export function open<T: Page>(Page: T): T {
    return at(Page).open();
}

export function at<T: Page>(Page: T): T {
    return typeof Page === 'function' ? new Page() : Page;
}
