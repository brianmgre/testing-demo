
/**
 * Accepts a string, returns the string with the character reversed.
 * @param {string} string
 * @returns {returns} reversedString 
 */

function reverseString(string) {

    return string.split('').reverse().join('');
};

module.exports = {
    reverseString,
};



//pre-test
// 1. SUmmarize what your function does
// 2. Write function signature - what it takes in, what it returns

//Test
// 1. Get Red - write test, have it fail
// 2. Get Green - fix thing that's getting tested, have it pass
// 3. Refactor- optional, make it better, keep it green