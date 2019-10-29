// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const result = [];
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== 0 && i % size === 0) {
            result.push(tempArray);
            tempArray = [];
        }
        tempArray.push(array[i]);
        if (i+1 === array.length && tempArray.length !== 0) {
            result.push(tempArray);
        }
    }
    return result;

}

module.exports = chunk;
