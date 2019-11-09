// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let result = 0;
    const letters = 'aeiou';
    for (let char of str.toLocaleLowerCase()) {
        if (letters.includes(char)) {result++;}
    }

    return result;

    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const arr = str.toLocaleLowerCase().split('');
    // let result = 0;
    // for (let i in arr) {
    //     const letter = arr[i];
    //     if (vowels.includes(letter)) {result++;}
    // }
    // return result;
}

module.exports = vowels;
