/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive(nums) {
    for (let i = 1; i < nums.length; i++) {
        //run a for loop to iterate
        const currNum = nums[i];
        //create variable for the current number and set as nums[i]
        const prevNum = nums[i - 1];
        //create another variable for the previous number  and set as nums[i-1]

        if (prevNum + 1 !== currNum) {
            //compare the previous number plus one to the current number. 
            //if the previous number plus one does not equal the current number, return current number
            return currNum;
        }
    }
    return null;
    //return null if no number in parameter or if it is consecutive
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([0]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5]));


//ANOTHER WAY TO DO THIS

/*
unction firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
*/