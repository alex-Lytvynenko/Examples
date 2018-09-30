// use this function if you need to format a CamelCasedWord into separated words
export default function camelCaseToSpaces(value) {
    return value.replace(/([a-z])([A-Z])/g, '$1 $2');
}
