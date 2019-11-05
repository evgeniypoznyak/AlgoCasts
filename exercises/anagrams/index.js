// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const stringToObjectMap = string => {
//     const result = {};
//     for (let i in string) {
//         result[string[i]] = result[string[i]] + 1 || 1;
//         // if (!result[string[i]]) {
//         //     result[string[i]] = 1;
//         // } else {
//         //     result[string[i]]++;
//         // }
//     }
//     return result;
// };

const cleanAndSortString = str => str.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('');

function anagrams(stringA, stringB) {
    return cleanAndSortString(stringA) === cleanAndSortString(stringB);

    // stringA = stringA.replace(/[^\w]/g, '').toLocaleLowerCase();
    // stringB = stringB.replace(/[^\w]/g, '').toLocaleLowerCase();
    // if (stringA.length !== stringB.length) {
    //     return false;
    // }
    // let objectA = {};
    // let objectB = {};
    //
    // objectA = stringToObjectMap(stringA);
    // objectB = stringToObjectMap(stringB);
    //
    // for (const char in objectA) {
    //     if (!objectB[char]) {
    //         return false;
    //     }
    //     if (objectA[char] !== objectB[char]) {
    //         return false;
    //     }
    // }
    // return true;
}

module.exports = anagrams;
