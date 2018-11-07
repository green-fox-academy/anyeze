'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function fourRect(x, y, width, height){

        ctx.fillRect(x, y, width, height )
    
};


for(let i = 0; i < 4; i++){

    ctx.fillStyle = `rgb(129, 0, ${(255/4) * i}`;
    fourRect((i*50)+50, (i*100)+20, (i*10)+30, (i*10)+30)


}