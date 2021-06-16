
//I like this solution the best. 
function matrixElementsSum(matrix) {
    let sum = 0;
    let flags = Array(matrix[0].length).fill(true);
    //I'm still trying to figure out this line. This line is what makes the difference. 
    console.log(flags)
    console.log(matrix[0])

    for (let row of matrix) {
        //another way to loop through an array. In this case, looping through rows of the matrix.
        for (let j = 0; j < flags.length; j++) {
            //Loop through the row
            flags[j] = flags[j] && row[j];
            //This is where the following elements would become zero
            if (flags[j]) sum += row[j];
            //This is where the sum of the values happen
        }
    }
    return sum;
}

let matrix = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));

//ANOTHER SOLUTION TO THIS PROBLEM ON STACK OVERFLOW
/*
const mat1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

function matrixElementsSum(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        console.log(row)
        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = i; k < matrix.length; k++) {
                    matrix[k][j] = 0
                }
            }
        }
    }

    let total = 0
    for (let i of matrix)
        for (let j of i)
            total += j;

    return total;
}

console.log(matrixElementsSum(mat1));
*/

// const transpose = (xs) =>
//     xs[0].map((_, i) => xs.map(r => r[i]))

// const sum = (ns) =>
//     ns.reduce((a, b) => a + b, 0)

// const sumToFirstZero = ([n, ...ns]) =>
//     n ? n + sumToFirstZero(ns) : 0

// const problem = (matrix) =>
//     sum(transpose(matrix).map(sumToFirstZero))

// console.log(problem([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
// ]))


//This was my original algo. I couldn't figure out how to make the following array's element equal zero if a zero is encountered in the column. 
/*
function matrixElementsSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i])
        for (var j = 0; j < matrix[0].length; j++) {
            console.log(matrix[i][j])
            if (matrix[i][j] == 0) {
                console.log(true)
                STUCK HERE
            }
            else {
                console.log(false)
            }
            if (matrix[i][j] !== 0) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

let matrix = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));
*/