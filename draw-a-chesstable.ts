'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 30;
let lineOne: string = "% ";
let lineTwo: string = " %";


for(let i: number = 0; i < lineCount; i++){

    if(i % 2 === 0){

        console.log(lineOne.repeat(lineCount/2));
    }else{
        console.log(lineTwo.repeat(lineCount/2));
    }

}