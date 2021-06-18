/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

function allLongestStrings(inputArray) {
    var newArray = [];
    var max = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > max) {
            max = inputArray[i].length
        }
    }
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length == max) {
            newArray.push(inputArray[j])
        }
    }
    return newArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aa"]));
console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
console.log(allLongestStrings(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]));
console.log(allLongestStrings(["enyky", "benyky", "yely", "varennyky"]));
console.log(allLongestStrings(["abacaba", "abacab", "abac", "xxxxxx"]));