/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
*/

function commonCharacterCount(s1, s2) {
    var count = 0;
    var array1 = s1.split('')
    console.log(array1)
    var array2 = s2.split('')
    console.log(array2)
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            console.log(array1[i], array2[j])
            if (array1[i] == array2[j]) {
                count++
                console.log(count)
                array1.shift()
                console.log(array1)
            }
        }
    }
    return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
// console.log(commonCharacterCount());
// console.log(commonCharacterCount());
// console.log(commonCharacterCount());
// console.log(commonCharacterCount());
