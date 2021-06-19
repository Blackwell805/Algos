/* Reverse string

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”

*/

function reverseString(string) {
    //create a variable to store items
    var result = "";
    //create a for loop
    //start at the end of the string. Minus one from length to start at the end index point.
    //End loop at index 0
    //decrement your iterations
    for (let i = string.length - 1; i >= 0; i--) {
        //add index item into the created variable
        result += string[i]
        console.log(result)
    }
    //return our result
    return result
}

console.log(reverseString("Cat"));
console.log(reverseString("The Daily Byte"));
console.log(reverseString("Civic"));