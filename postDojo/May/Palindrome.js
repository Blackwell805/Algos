/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

function isPalindrome(line) {
    // console.log(typeof line)
    line = line.toString();
    //This step makes it to where whatever the type of data in the parameter, we'll change it to a string. 
    //If this isn't added, 123456 will show true when it is really false
    // console.log(typeof line)

    for (let i = 0; i < Math.floor(line.length / 2); i++) {
        //Our stop point is going to the the middle point of the data.
        //We do this by:
        //1)Math.floor rounds down to it's nearest integer.
        //2)The line.length is divided by two.

        let leftChar = line[i];
        //Create a variable to store the beginning value on the left side of data
        let rightChar = line[line.length - 1 - i];
        //Created another variable to store the ending value on the right side of data

        if (leftChar !== rightChar) {
            //Create an If statement to check to make sure the variables are the same character. 
            return false;
        }
    }
    return true;

}


console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));
console.log(isPalindrome("."));
console.log(isPalindrome(".!!."));


//ANOTHER WAY TO DO THIS

// function isPalindrome(line) {
//     line = line.toString();

//     for (var left = 0, right = line.length - 1; left < right;) {
//         if (line.charAt(left++) !== line.charAt(right--)) {
//             return false;
//         }
//     }

//     return true;
// }


// console.log(isPalindrome("anna"));
// console.log(isPalindrome("walter"));
// console.log(isPalindrome(12321));
// console.log(isPalindrome(123456)); 
// console.log(isPalindrome("."));
// console.log(isPalindrome(".!!."));