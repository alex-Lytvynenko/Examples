import BaseElement from './BaseElement';

export default class Element extends BaseElement {
    // Element.of('locator') is needed to create a new instance of Element class
    static of(value) {
        return new Element(value);
    }

    shouldHaveText(text) {
        expect(this.getValue()).to.equal(text);
    }

    shouldHaveTexts(textArray) {
        expect(this.getAllValues()).to.have.members(textArray);
    }

    shouldHaveSize(size) {
        expect(this.shouldBeAllVisible().value.length).to.equal(size);
    }

    shouldHaveSizeGreaterThan(size) {
        expect(this.shouldBeAllVisible().value.length).to.be.above(size);
    }

    shouldBeOrdered(arr) {
        expect(this.getAllValues()).to.have.ordered.members(arr);
    }

    shouldHaveAttribute(attributeName, text) {
        expect(this.getAttributeValue(attributeName)).to.be.equal(text);
    }

    hoverOver() {
        this.shouldBeVisible().moveToObject();
    }
}
