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
    // const result = [];
    // let tempArray = [];
    // if (array.length < size) {
    //     return array;
    // }
    // for (let i = 0; i < array.length; i++) {
    //     if (i !== 0 && i % size === 0) {
    //         result.push(tempArray);
    //         tempArray = [];
    //     }
    //     tempArray.push(array[i]);
    //     if (i+1 === array.length && tempArray.length !== 0) {
    //         result.push(tempArray);
    //     }
    // }
    // return result;

    const chunked = [];
    for (let element of array){
        // get the pointer for element in array to modify it
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        }else{
            // modify chunked by modifying pointer
            last.push(element);
        }

    }
    return chunked;
}

module.exports = chunk;
