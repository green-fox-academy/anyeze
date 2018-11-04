'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let space: string = ' ';
let star: string = '*'

for (let row: number= 0; row < lineCount; row++) {
    if (row < lineCount / 2) {
        let starCount: number = 1 + row * 2;
        let spaceCount: number = (lineCount - starCount) / 2 ;
        console.log(space.repeat(spaceCount) + star.repeat(starCount));
    } else {
        let starCount: number = lineCount - (2 * (row - ((lineCount - 1) / 2)));
        let spaceCount: number = (lineCount - starCount) / 2;
        console.log(space.repeat(spaceCount) + star.repeat(starCount));
    }
}