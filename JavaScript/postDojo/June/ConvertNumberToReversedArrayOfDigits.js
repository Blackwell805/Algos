/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
    //We need to break up the number into individual integers.
    var array = [];
    //create an empty array to store the digits
    var string = n.toString();
    //create another variable to take the number and turn it into a string
    for (var i = 0; i < string.length; i++) {
        //do a for loop to iterate through the string
        array.push(string[i])
        //push each iterated item into the empty array created
    }
    var temp = 0;
    //create a temp variable to store an individual item
    var newArray = [];
    //create another new array to hold the iterated items that will need to be turned from string to number
    for (let j = array.length - 1; j >= 0; j--) {
        //create another for loop to iterate through the array. This time, starting at the end of the array as to build the new array in the reverse order
        // console.log(array)
        temp = array[j];
        //set temp to each item
        temp = parseInt(array[j])
        //turn that item, which is a string, into a number
        // console.log(temp)
        newArray.push(temp)
        //push into the new array the temp variable
        array.pop();
        //pop the item off in the first array.
        // console.log(newArray)
    }
    return newArray
}

console.log(digitize(35231), "Should return back [1, 3, 2, 5, 3]");


//ANOTHER WAY TO DO THIS


// function digitize(n) {
//     //code here
//     let numArr = [];

//     while (n > 0) {
//         console.log(n)
//         numArr.push(n % 10);
//         console.log(numArr)
//         n = Math.floor(n / 10);
//         console.log(n)
//     }

//     return numArr;
// }

// console.log(digitize(35231), "Should return back [1, 3, 2, 5, 3]");