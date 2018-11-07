'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(x,y){

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.lineTo(x, y);
ctx.stroke();
}


for(let i = 0; i < canvas.width; i+=20){
            drawLine(i,0)
        }

for(let j = 0; j < canvas.height; j+=20){
          
            drawLine(canvas.width, j)
        }

for(let k = 0; k <= canvas.height; k+=20){
          
        drawLine(0, k)
}

for(let d = 0; d <= canvas.width; d+=20){

    drawLine(d,canvas.height)
} 