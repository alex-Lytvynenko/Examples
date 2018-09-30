import { threshold } from '../../model/Constants';

/* these are the conditions for waitUntil()
 use this like this
 Element.of('locator').waitUntil(isEquals, valueToEqual)*/
export const isInRange = (text, value) => {
    const num = parseFloat(text);
    return num >= value - threshold && num <= value + threshold;
};

export const isEquals = (text, value) => {
    return text === value;
};

export const isNotEquals = (text, value) => {
    return text !== value;
};
