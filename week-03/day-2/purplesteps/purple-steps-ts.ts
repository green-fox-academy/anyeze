'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
let sideX: number = 15;
let sideY: number = 15;
function fourRect(x, y){

    ctx.fillRect(x, y, sideX, sideY )

};


for(let i = 0; i < 20; i++){

ctx.fillStyle = "rgb(186,85,211)";
fourRect((i*sideX), (i*sideY))


}

function fourRect2(x, y){

    ctx.strokeRect(x, y, sideX, sideY )

};


for(let i = 0; i < 20; i++){

ctx.strokeStyle = "black";
fourRect2((i*sideX), (i*sideY))


}