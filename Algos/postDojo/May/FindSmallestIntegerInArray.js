/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/


// function findSmallestInt(args) {
//     var min = args[0];
//     //create a variable to store minimum value and set it equal to the first indexed item
//     for (var i = 1; i < args.length; i++) {
//         //create a for loop to iterate through data
//         if (args[i] < min) {
//             //create an if statement to compare the iteration to the min variable
//             min = args[i]
//             //set min variable to equal the index item if true
//         }
//     }
//     return min
//     //return the min variable
// }


// console.log(findSmallestInt([78, 56, 232, 12, 8]), 'Should return the smallest int 8');
// console.log(findSmallestInt([78, 56, 232, 12, 18]), 'Should return the smallest int 12');
// console.log(findSmallestInt([78, 56, 232, 412, 228]), 'Should return the smallest int 56');
// console.log(findSmallestInt([78, 56, 232, 12, 0]), 'Should return the smallest int 0');
// console.log(findSmallestInt([1, 56, 232, 12, 8]), 'Should return the smallest int 1');


//ANOTHER WAY TO DO THIS


function findSmallestInt(args) {
    args.sort(function (a, b) {
        //we can use the sort function to simplify the process
        console.log(a, b)
        return a - b;
    })
    //a-b will return the data min-max arrangement
    return args[0];
    //first indexed item will be the min
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([78, 56, 232, 412, 228]));
console.log(findSmallestInt([78, 56, 232, 12, 0]));
console.log(findSmallestInt([1, 56, 232, 12, 8]));
