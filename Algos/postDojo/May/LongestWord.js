/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

// var sen = "fun&!! time";
// var sen = "I love dogs";

function LongestWord(sen) {

    console.log(sen)


    var arr = sen.match(/[a-z]+/gi);
    // [a-z] we are saying look for letters between a-z. The + keeps the words found together as a word. g means global which continues after first match found. i means you include capitalized letters as well. 

    // console.log(arr) // = ['fun', 'time']

    var sorted = arr.sort(function (a, b) {
        //by sorting, we

        console.log(a) // "time"
        console.log(b) // "fun"

        return b.length - a.length;
        //a.length(fun) - b.length(time). 
        // a-b is arranged smallest to largest, alphabetical. 
        //b.length(time) - a.length(fun)
        // b-a is arranged largest to smallest, reverse alphabetical. Therefore, we use this arrangement.
    });

    // console.log(sorted)
    return sorted[0];
}

console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));
