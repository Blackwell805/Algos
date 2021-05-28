/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}

console.log(summation(1), "Answer should be 1");
console.log(summation(8), "Answer should be 36");


//ANOTHER WAY TO DO THIS

/*
var summation = function (num) {
    //We are setting a variable to equal a function. Everytime we call this variable, it will perform this function.
    var newNum = 0;
    //create a variable to compare to the individual number in the parameter
    var array = [];
    //create an empty array to where we can store individual values
    var total = 0;
    //create another variable to store the total sum
    while (newNum <= num) {
        //we use a while loop to create an array of numbers while not knowing the number in the paramter
        array.push(newNum)
        //push the iterated number into the new array
        newNum++
        //increment
        // console.log(newNum)
    }
    // console.log(array)
    for (var i = 1; i < array.length; i++) {
        //now that an array is created, we iterate through it with a for loop
        // console.log(i)
        total += array[i]
        //the total variable will equal each iteration added to each other
    }
    return total
}

console.log(summation(1), "Answer should be 1");
console.log(summation(8), "Answer should be 36");
*/