import { pollingTime, timeout } from '../model/Constants';

export default class BaseElement {
    constructor(value) {
        this.value = value;
    }

    get element() {
        return browser.element(this.value);
    }

    get elements() {
        return browser.elements(this.value);
    }

    shouldBeVisible() {
        this.element.waitForVisible();
        return this.element;
    }

    click() {
        this.shouldBeVisible().click();
    }

    shouldHaveSomeText() {
        this.element.waitForText();
        return this.element;
    }

    shouldBeAllVisible() {
        this.elements.waitForVisible();
        return this.elements;
    }

    shouldExist() {
        this.element.isExisting();
        return this.element;
    }

    enterValue(text) {
        this.shouldBeVisible().setValue(text);
    }

    getValue() {
        return this.shouldBeVisible().getText();
    }

    getAllValues() {
        return this.shouldBeAllVisible().getText();
    }

    getAttributeValue(attributeName) {
        return this.shouldExist().getAttribute(attributeName);
    }

    /*this function will pass Backspace into the locator
    to clear it with Backspace button
    might be needed for some cases*/
    clearCharacter(times) {
        this.click();
        browser.keys('\uE003'.repeat(times));
    }

    /* this function will get value of passed locator
    verify it in passed condition until spent polling time will reach timeout
    if condition will be true before loop reaches max timeout - loop will end
    it will return value of passed locator nevertheless so you could verify it*/
    waitUntil(condition, value) {
        let spent = 0;
        do {
            browser.pause(pollingTime);
            spent += pollingTime;
        } while (!condition(this.getValue(), value) && spent < timeout);
        return this.getValue();
    }
}
