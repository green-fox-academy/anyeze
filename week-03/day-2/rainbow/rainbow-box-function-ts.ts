'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


let numbersOfsquare: number =7;

let color: string [] = ["red", "orange","yellow", "green","blue","purple", "pink"]



for(let i=0; i<numbersOfsquare; i++){


    drawRainbowSquare((canvas.width/2)-i*45, color[i]);

}

function drawRainbowSquare(xy, color){
    ctx.fillStyle=color;
    ctx.fillRect((canvas.width/2)-(xy/2), (canvas.height/2)-(xy/2), xy, xy)

}
