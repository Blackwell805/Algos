/*
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples :
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    var centuryAmount = 100;
    //create a variable to define the amount of a century
    var remaining = 0;
    var theCentury = 0;
    //create variables to store the amount of centuries and remaining years
    theCentury = Math.trunc(year / centuryAmount);
    //trunc the result to get just the integer result
    remaining = year % centuryAmount;
    //use modulus to get the remainder years
    if (remaining >= 1) {
        //create if statement to check if the remainder is equal to or greater than 1
        theCentury++
        //increment if it is
        return theCentury
    }
    if (year < 101) {
        //create another if statement incase the year is less than 100
        return 1;
    }
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');


//ANOTHER WAY TO DO THIS

// function century(year) {
//     var century = 0;

//     for (var i = 0; i < year; i++) {
//         if (i % 100 == 0) {
//             century++;
//         }
//     }
//     return century;
// }

// console.log(century(1705), 18, 'Testing for year 1705');
// console.log(century(1900), 19, 'Testing for year 1900');
// console.log(century(1601), 17, 'Testing for year 1601');
// console.log(century(2000), 20, 'Testing for year 2000');
// console.log(century(89), 1, 'Testing for year 89');