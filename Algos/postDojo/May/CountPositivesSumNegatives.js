/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

REFER TO CODE WARS FOR THIS ALGO
*/

function countPositivesSumNegatives(input) {
    //check to see if the array is empty or null. If either one, we return empty array
    if (input == [] || input === null) {
        return [];
    }
    //create variables to store results. One for count, one for sum, another is an empty array
    let count = 0;
    let sum = 0;
    let array = [];

    for (var i = 0; i < input.length; i++) {
        //iterate through loop
        if (input[i] > 0) {
            count++;
            //if greater than 0, increase count
        }
        if (input[i] < 0) {
            sum += input[i]
            //if less than 0, add the index item to the variable sum
        }
    }
    //REFERRING TO WORKING THIS OUT ON CODE WARS
    //If I don't add the if statement below, some tests will fail due to the array returning as [0,0] instead of []
    // if (count != 0 && sum != 0) {
    array.push(count, sum)
    // }
    return array;
}

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData), "Should return [10, -65]");
testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData1), "Should return [8,-50]");
console.log(countPositivesSumNegatives([-51]));



//ANOTHER WAY TO DO THIS

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//         return [];

//     var positive = 0;
//     var negative = 0;

//     for (var i = 0, l = input.length; i < l; ++i) {
//         if (input[i] > 0)
//             ++positive;
//         else
//             negative += input[i];
//     }

//     return [positive, negative];
// }

// var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(testData), "Should return [10, -65]");
// testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// console.log(countPositivesSumNegatives(testData1), "Should return [8,-50]");
// console.log(countPositivesSumNegatives([-51]));