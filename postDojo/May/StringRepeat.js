/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
    var string = '';
    //create a variable to store our results
    for (var i = 0; i < n; i++) {
        //create a for loop to iterate through the string
        string += s
        //make the new variable equal the new variable plus the string value in parameter
    }
    return string;
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));


//ANOTHER WAY TO DO THIS
/*
function repeatStr(n, s) {
    console.log(n, s)
    var result = s.repeat(n)
    return result;
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
*/

/*
function repeatStr (n, s) {
    return s.repeat(n);
  //this is the same as above with out having to create a variable
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
*/