'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let sides: string = "%";
let space: string = " ";

for( let i: number = 0; i< lineCount; i++){

    if(i === 0 || i === lineCount-1){
        console.log( sides.repeat(lineCount-1))
    }else if( i === 1){

        console.log(sides + sides + space.repeat(lineCount-4) + sides);
    }else if( i === 2){
        console.log(sides + space + sides + space + sides);
    }else if( i === 3){
        console.log(sides + space.repeat(2) + sides.repeat(2));
    }else{
        console.log(sides + space.repeat(3) + sides);
    };

}

