/* 
    Given an honorific (name title) and array of full name strings,
    in "LastName, FirstName" format
    
    Return a new array of strings in this format: "Honorific FirstName LastName"
    Bonus: re-write it with built in functional programming methods

    EXAMPLE:
    const hon = "Mr.";
    const names = [];

    addHonorific(hon, names) should return [] because there are no names to add an honorific
    to.

    const hon2 = "Sir";
    const names2 = ["Sanchez, Rick", "Smith, Jerry"];

    addHonorific(hon2, names2) should return ["Sir Rick Sanchez", "Sir Jerry Smith"]
*/
function addHonorific(honorific, fullNames){

}

/* 
    Given two strings, version1, and version2, both representing version numbers
    If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
    Helpful methods:
        - .split(characterToSplitOn)
        - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
        - .parseInt
        - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
    Bonus, solve without .split

    EXAMPLE:
    const test1V1 = "0.1";
    const test1V2 = "1.1";

    compareVersionNumbers(test1V1, test1V2) should return -1, because test1V1 is an earlier version
    than test1V2

    const test2V1 = "7.5.3";
    const test2V2 = "7.5.2.4";

    compareVersionNumbers(test2V1, test2V2) should also return 1, becaues 7.5.2.4 is an earlier
    version than 7.5.3
*/
function compareVersionNumbers(version1, version2){

}