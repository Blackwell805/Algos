/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {
    var sum = 0;
    //create a sum variable 
    var largest = 0;
    //create a largest variable
    var newArray = [];
    //create an array to store values 
    for (var i = 0; i < inputArray.length - 1; i++) {
        //create for loop to iterate
        // console.log(inputArray[i])
        sum = inputArray[i] * inputArray[i + 1]
        //sum will equal the index item multiplied by the index item +1
        // console.log(sum)
        newArray.push(sum)
        //push sum into new array variable
        // console.log(newArray)
        var result = Math.max(...newArray)
        //new variable equals the new array with Math.max function to pull the smallest negative number
        if (sum >= result) {
            //compare sum variable to result
            largest = sum
            // console.log(largest)
        }
    }
    return largest
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), "Answer should be 21");
console.log(adjacentElementsProduct([[-1, -2]]), "Answer should be 2");
//The solution is still correct for the function above
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), "Answer should be 6");
console.log(adjacentElementsProduct([1, 2, 3, 0]), "Answer should be 6");
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]), "Answer should be -12");