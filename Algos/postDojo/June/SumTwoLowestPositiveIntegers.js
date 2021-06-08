/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

//TAKE HOME FOR THIS ALGO
//if you need to pull out data based on a value, use sort function to arrange it.

function sumTwoSmallestNumbers(numbers) {
    var ordered = numbers.sort(function (a, b) { return a - b; });
    // Create a variable to store the process of taking the array and sorting it. 
    //This will arrange the array from min to max
    var result = 0;
    //create a result variable

    for (i = 0; i < ordered.length; i++) {
        //create a for loop with the process variable 
        if (i == 0) {
            result += ordered[0];
            //take the first index(min) and add it to the result variable
        }
        if (i == 1) {
            result += ordered[1];
            //take the second index(second min) and add it to the result variable
        }
    }
    // console.log(ordered)
    return result;
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), "Sum should be 16");




// This is my original attempt that did not get completed. I tried to go about this without having to use any built-in functions. I will update this at a later time
/*
function sumTwoSmallestNumbers(numbers) {
    var sum = 0;
    var min1 = numbers[0];
    var min2 = numbers[1];
    var array = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min1) {
            min1 = numbers[i]
        }
        //     console.log(min1)
        for (var j = 1; j < numbers.length - 1; j++) {
            //       console.log(numbers[j])
            if (numbers[j] < min2) {
                min2 = numbers[j]
            }
            if (min1 == min2) {
                !sum
            }
        }
        console.log(min1, min2)
        sum = min1 + min2
        console.log(sum)
    }
    return sum
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), "Sum should be 16");
*/