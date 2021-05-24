/*
Convert a Number to a String
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/


function numberToString(num) {
    console.log(num)
    //we can see num is an integer 
    var String = num.toString()
    //we create a variable and turn num into a string using toString()
    console.log(typeof String)
    //we check to see if num really was turned into a string
    return String
}

console.log(numberToString(67));



//ANOTHER WAY TO DO THIS
/*
function numberToString(num) {
    return num.toString();
}
console.log(numberToString(67));
*/