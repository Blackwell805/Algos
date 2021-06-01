/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
    var newNum = 0;
    //create a variable to store the mathmatical result
    var sum = 0;
    //create another variable to store the sum
    for (var i = 0; i < numbers.length; i++) {
        //create for loop to iterate though the array
        newNum = numbers[i] ** 2
        //set variable to equal the index item being multiplied by it's exponent
        sum += newNum
        //set variable sum to equal each indexed item's result
    }
    return sum
}


console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);


//ANOTHER WAY TO DO THIS

// function squareSum(numbers) {
//     var sum = 0;
//     numbers.forEach(function (n) {
//         sum += n * n
//     });
//     return sum;
// }

// console.log(squareSum([1, 2]), 5);
// console.log(squareSum([0, 3, 4, 5]), 50);