/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
    //set an if statement to check boolean. 
    if (bool) {
        //originally I had if(bool == true)
        //the bool parameter is saying "Is this a boolean". True = "Yes" automatically.
        return "Yes"
    }
    else
        return "No"
}

console.log(boolToWord(true));
console.log(boolToWord(false));