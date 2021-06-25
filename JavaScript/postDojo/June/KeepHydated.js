/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
    // console.log(time)
    var waterDrank = time * (.5);
    //Create a variable that equals the time multiplied by .5
    // console.log(waterDrank);
    return Math.floor(waterDrank);
    //use Math.floor() to round to the smallest value
}

console.log(litres(2), 'should return 1 litre');
console.log(litres(1.4), 'should return 0 litres');
console.log(litres(12.3), 'should return 6 litres');
console.log(litres(0.82), 'should return 0 litres');
console.log(litres(11.8), 'should return 5 litres');
console.log(litres(1787), 'should return 893 litres');
console.log(litres(0), 'should return 0 litres');


//ANOTHER WAY TO DO IT

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }