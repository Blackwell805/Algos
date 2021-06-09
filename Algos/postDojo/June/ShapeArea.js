/*
Task
Below we will define what and n-interesting polygon is and your task is to find its area for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim side by side. You can see the 1-, 2- and 3-interesting polygons in the picture below.

Refer to CodeWars for image

Example
For n = 1, the output should be 1;

For n = 2, the output should be 5;

For n = 3, the output should be 13.

Input/Output
[input] integer n

Constraints: 1 ≤ n < 10000.

[output] an integer

The area of the n-interesting polygon.
*/

function shapeArea(n) {
    var sum = 1;
    //create a sum variable and start it at 1 for a beginning point (ie. n=1)
    for (var i = 0; i < n; ++i) {
        //create a for loop to iterate 
        console.log(i)
        sum += i * 4;
        //the sum variable will equal every iteration multiplied by 4, since one square has 4 sides. 
        console.log(sum)
    }
    return sum;
}

console.log(shapeArea(2), 5);
console.log(shapeArea(3), 13);
console.log(shapeArea(1), 1);
console.log(shapeArea(5), 41);


//ANOTHER WAY TO DO THIS
//I don't fully understand how this solution works yet.

/*
function shapeArea(n) {
    return 2*n*(n-1) +1;
}

console.log(shapeArea(2), 5);
console.log(shapeArea(3), 13);
console.log(shapeArea(1), 1);
console.log(shapeArea(5), 41);
*/