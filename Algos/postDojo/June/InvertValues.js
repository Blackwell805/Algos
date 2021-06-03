/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    for (var i = 0; i < array.length; i++) {
        //create a for loop to iterate through array
        if (array[i] <= 0 || array[i] >= 0) {
            //create an if statement to determine if it's a positive or a negative
            array[i] *= -1;
            //multiply the array[i] by -1 to change it's value
        }
    }
    return array;
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);