import step from '../utils/StepDecorator';

export default class Page {
    @step(url => `Open ${url}`)
    open(path) {
        browser.windowHandleSize({ width: 1920, height: 1080 });
        browser.url(path);
        return this;
    }

    /*
    add this if you want to chain functions
    using more BDD way

    then() {
        return this;
    }

    and() {
        return this;
    }
    */
}
