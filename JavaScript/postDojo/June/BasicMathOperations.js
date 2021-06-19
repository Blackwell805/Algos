/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

function basicOp(operation, value1, value2) {
    //create a sum variable
    var sum = 0;
    //create a conditional to compare the operation, and then set sum to equal that operation
    if (operation == "+") {
        sum = value1 + value2;
    }
    else if (operation == "-") {
        sum = value1 - value2;
    }
    else if (operation == "*") {
        sum = value1 * value2;
    }
    else if (operation == "/") {
        sum = value1 / value2;
    }
    return sum
}

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);


//ANOTHER WAY TO DO THIS

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

// console.log(basicOp('+', 4, 7), 11);
// console.log(basicOp('-', 15, 18), -3);
// console.log(basicOp('*', 5, 5), 25);
// console.log(basicOp('/', 49, 7), 7);