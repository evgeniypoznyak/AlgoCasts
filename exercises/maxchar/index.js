// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const result = {};
    for (const i of str){
        result[i] = result[i] + 1 || 1;
        // if (result[i]  !== undefined) {
        //     result[i]++;
        // } else {
        //     result[i] = 1;
        // }
    }

    let max = Number.MIN_SAFE_INTEGER;
    let index;
    for (const i in result) {
        if (result[i] > max) {
            max = result[i];
            index = i;
        }
    }
    return index;
}

module.exports = maxChar;
