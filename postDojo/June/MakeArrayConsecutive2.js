/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function makeArrayConsecutive2(statues) {
    var max = statues[0]
    var min = statues[0]
    var i = 0
    //Create max and min variables and set as first element
    //create i variable and set to 0
    var result = 0;
    //result variable to create simply to show the math below. 
    while (i < statues.length) {
        //Create a while loop to iterate
        if (statues[i] > max) {
            //if the element is larger than max, set as max
            max = statues[i]
        }
        if (statues[i] < min) {
            //if the element is less than min, set as min
            min = statues[i]
        }
        i++
        console.log("This is the Max =" + max)
        console.log("This is the Min = " + min)
        console.log("This is the length = " + statues.length)
    }
    result = max - min - statues.length + 1
    //This is where the counting of the number of statues needed occurs. Still unsure in theory why the 1 is added. 
    //The idea is that if we want to find out how many statues are needed, we know the max and min value. By subtracting min from max, and then subtracting the number of statues present, we can add one to fill in the space. 
    console.log(result)

    return result
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]), "Expecting 3");
console.log(makeArrayConsecutive2([0, 3]), "Expecting 2");
console.log(makeArrayConsecutive2([5, 4, 6]), "Expecting 0");
console.log(makeArrayConsecutive2([6, 3]), " Expecting 2");
console.log(makeArrayConsecutive2([1]), "Expecting 0");