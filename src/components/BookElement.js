// @flow
import Element from './Element';

export default class BookElement extends Element {
    constructor(name: string) {
        super(`//a[@title='${name}']`);
        this.name = name;
    }

    child(elementName: string) {
        return Element.of(`${this.value}${elementName}`);
    }

    static of(name: string) {
        return new BookElement(name);
    }
}

export const locator = {
    title: '//h2',
    date: "//following-sibling::span[@class='a-size-small a-color-secondary']",
    author: '//parent::div//following-sibling::div',
    bookType:
        "//ancestor::div[@class='a-row a-spacing-small']//following-sibling::div[@class='a-row']//div[@class='a-row a-spacing-none'][1]//h3",
    priceSign:
        "//ancestor::div[@class='a-row a-spacing-small']//following-sibling::div[@class='a-row']//div[@class='a-row a-spacing-none'][2]//span[@class='sx-price sx-price-large']//sup[1]",
    priceWhole:
        "//ancestor::div[@class='a-row a-spacing-small']//following-sibling::div[@class='a-row']//div[@class='a-row a-spacing-none'][2]//span[@class='sx-price sx-price-large']//span",
    priceFractional:
        "//ancestor::div[@class='a-row a-spacing-small']//following-sibling::div[@class='a-row']//div[@class='a-row a-spacing-none'][2]//span[@class='sx-price sx-price-large']//sup[2]"
};
