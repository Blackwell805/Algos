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
    count = 0;
    //create a counting variable 
    arr = s1.split('');
    //Use split function to turn items in single items in an array
    // console.log(arr)
    arr1 = s2.split('');
    //Use split function to turn items in single items in an array
    // console.log(arr1)
    for (i = 0; i < s1.length; i++) {
        //Loop through first array
        for (j = 0; j < s2.length; j++) {
            //loop through second array
            // console.log(arr[i], arr1[j])
            if (arr[i] == arr1[j]) {
                //If the iterated items in both arrays are the same
                count++;
                //increase count
                // console.log(count)
                arr1.splice(j, 1);
                //Use the splice function to remove the item just compared
                // console.log(arr1)
                break;
                //add the break to stop an additional count
            }
        }
    } return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"), "Should be 3");
console.log(commonCharacterCount("zzzz", "zzzzzzz"), "Should be 4");
console.log(commonCharacterCount("abca", "xyzbac"), "Should be 3");
console.log(commonCharacterCount("a", "b"), "Should be 0");
console.log(commonCharacterCount("a", "aaa"), "Should be 1");


//THIS WAS MY ORIGINAL ATTEMPT
//VERY SIMILAR TO ABOVE SOLUTION
/*
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
console.log(commonCharacterCount("zzzz", "zzzzzzz"));
console.log(commonCharacterCount("abca", "xyzbac"));
console.log(commonCharacterCount("a", "b"));
console.log(commonCharacterCount("a", "aaa"));
*/