'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let b: number = 0;
let sideXy: number = 15;

function fourRect(x, y, width, height){
    ctx.fillStyle = "rgb(186,85,211)";
    ctx.fillRect(x, y, width, height )
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.strokeRect(x, y, width, height )
};


for(let i = 1; i <= 6; i++){

fourRect((0)+b, (0)+b, (i*sideXy), (i*sideXy));
b = b + (i*sideXy);


} 


