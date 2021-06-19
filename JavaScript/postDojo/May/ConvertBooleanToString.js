/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b) {
    return b.toString();
}

console.log(booleanToString(true), 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false), 'When we pass in false, we want the string "false" as output');


//My original solution, drawing out what happens in the above example

// function booleanToString(b) {
//     if (b == true) {
//         //create an if statement to check if it's true or false
//         return b.toString("True")
//         //if true, then we take the input, use toString() to return "True"
//     }
//     else {
//         return b.toString("False")
//     }
// }

// console.log(booleanToString(true), 'When we pass in true, we want the string "true" as output');
// console.log(booleanToString(false), 'When we pass in false, we want the string "false" as output');