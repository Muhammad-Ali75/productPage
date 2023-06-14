export function addCommasToNumber(number) {
    return number.toLocaleString('en-US', { maximumFractionDigits: 2 });
}