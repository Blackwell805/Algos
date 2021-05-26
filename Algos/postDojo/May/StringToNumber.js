/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

var stringToNumber = function (str) {
    //I don't NEED to set a new variable but to keep with the habit, I created one.
    var newNumber = parseInt(str)
    //parseInt function converts string to number. First character must be a number or it will return NaN.

    return newNumber;
}

console.log(stringToNumber("1234"), 1234);
console.log(stringToNumber("605"), 605);
console.log(stringToNumber("1405"), 1405);
console.log(stringToNumber("-7"), -7);