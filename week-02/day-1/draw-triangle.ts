'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


let lineCount: number = 4;
let outPut: string= "*";

for(let i: number = 1; i <= lineCount; i++){
console.log(outPut.repeat(i))
    
};