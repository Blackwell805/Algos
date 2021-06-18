/*
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//This is not the best approach but I used this to past CodeWars Kata. 
// There is a better process for solving this below
function evenOrOdd(number) {
    var even = "Even";
    var odd = "Odd";
    if (number % 2 == 1 || number % 2 == -1) {
        number = odd;
        console.log(odd)
    } if (number % 2 == 0) {
        number = even;
        console.log(even)
    }
    return number
}

evenOrOdd((2), "Even");
evenOrOdd((0), "Even");
evenOrOdd((7), "Odd");
evenOrOdd((1), "Odd");
evenOrOdd((-3), "Odd");

// SOME OTHER WAYS TO DO THIS

/*

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd((2), "Even"));
console.log(evenOrOdd((0), "Even"));
console.log(evenOrOdd((7), "Odd"));
console.log(evenOrOdd((1), "Odd"));
console.log(evenOrOdd((-3), "Odd"));
*/