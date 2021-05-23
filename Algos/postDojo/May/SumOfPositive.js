/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    var sum = 0;
    //create a variable to store the sum 
    for (let i = 0; i < arr.length; i++) {
        //create for loop to iterate array
        if (arr[i] > 0) {
            //if the index value is greater than 0
            sum += arr[i]
            //add the index value to the sum variable 
        }
    }
    return sum;
    //return that variable
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);