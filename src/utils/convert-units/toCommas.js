// use this function if you need replace big numner, e.g. 123123123
// into comma-separated number, e.g. 123,123,123
export default function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
