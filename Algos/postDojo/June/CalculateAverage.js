/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
    var average = 0;
    var sum = 0;
    //create an average variable and a sum variable
    for (var i = 0; i < array.length; i++) {
        //create a for loop
        sum += array[i];
        //have the sum variable equal each iterated item added to the sum
        average = sum / array.length
        //have the average equal the sum divided by the array.length
    }
    return average;
}

console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);