/**
 * This function checks if a number is even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 *
 * Usage:
 * const result = isEven(4); // result will be true
 * const anotherResult = isEven(7); // anotherResult will be false
 */

function isEven(number) {
    return number % 2 === 0
}
const check = isEven(4); // result will be true
const check2 = isEven(7); // anotherResult will be false



/**
 * This function checks if a number is within a range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum range (included)
 * @param {number} max - The maximum range (included)
 * @returns {boolean} - True if the number is within range, false otherwise.
 *
 * Usage:
 * const inRange = isWithinRange(5, 1, 10); // inRange will be true
 * const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false
 */

function isWithinRange(n, min, max) {
    if(n >= min && n <= max ){
        return true
    }
    else {
        return false
    }

}

const inRange = isWithinRange(5, 1, 10); // inRange will be true
console.log(inRange)

/**
 * This function checks if a string contains the string "ba"
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string contains the string ba
 *
 * Usage:
 * const bananaContainsBa = stringContainsBa("banana"); // true
 * const harborContainsBa = stringContainsBa("harbor"); // false
 * const harborContainsBa = stringContainsBa("habanana"); // true
 */

function stringContainsBa(string) {
     return string.includes("ba");

}

const bananaContainsBa = stringContainsBa("banana"); // true
const harborContainsBa = stringContainsBa("harbor"); // false
console.log(harborContainsBa)


/**
 * This function calculates the sum of each digit raised to its position.
 *
 * @param {number} num - The number to process.
 * @returns {number} - The calculated sum.
 *
 * Usage:
 * const result = sumOfDigitsWithPosition(1234); // result will be 1^1 + 2^2 + 3^3 + 4^4 = (1) + (2 * 2) + (3 * 3 * 3) + (4 * 4 * 4 * 4) =  1 + 4 + 27 + 256 = 288
 * const result = sumOfDigitsWithPosition(52); // result will be 5^1 + 2^2 = 5 + (2 * 2) = 5 + 4 = 9
 */
function sumOfDigitsWithPosition(num) {
    let sum = 0;
    while (num != 0) {
        sum = sum + num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}







