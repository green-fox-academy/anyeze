'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(array: number[]) {

    let list = [4, 9, 12, 16];

    for (let i = 0; i < listOfNumbers.length; i++) {

        if (listOfNumbers.includes(list[i])) 
    


console.log(checkNums(listOfNumbers));

export = checkNums