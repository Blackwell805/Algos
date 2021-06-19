/*
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
    var array = [];
    //create an empty array
    var newString = ' ';
    //create a new string variable
    for (var i = 0; i < str.length; i++) {
        //create a for loop to iterate through string
        array.push(str[i])
        //push each character into the new array. This will make each character a seperate item in the array. 
    }
    array.shift();
    //eliminates the first item in the array
    array.pop();
    //eliminates the last item in the array
    // console.log(array);
    for (var j = 0; j < array.length; j++) {
        //create another for loop to iterate what's remaining
        newString = array.join("");
        //the new string variable will equal the items in the array by joining them together
    }
    return newString

};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));


//A BETTER WAY TO DO THIS
/*
    function removeChar(str){
    str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');
};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));

*/