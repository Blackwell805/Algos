/*
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
    var newString = "";
    //create a new string variable
    for (var i = 0; i < x.length; i++) {
        //create a for loop to iterate through data
        if (x[i] != " ") {
            //set up an if statement to check if the index item is NOT an empty space
            newString += x[i]
            //add the index item to the newString variable
        }
    }
    return newString
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');


//ANOTHER WAY TO DO THIS

// function noSpace(x) {
//     var newString = x.replace(/\s/g, '');
//     //To simplify the process, we can use the replace function to search the string for a specified value (AKA regular expression) and returns a new string without the specified values.
//     // \s = find a whitespace character
//     //g= global(keep going after first one found)
//     // you must put a '' to have the characters together, no spaces. 
//     return newString;
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
// console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');


//ANOTHER WAY TO DO THIS

function noSpace(x) {
    var newString = x.split(' ').join('')
    //split() is used to split a string into an array of substrings, and returns the new array.
    //join() returns the array as a string.
    return newString
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');

