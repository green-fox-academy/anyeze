'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function blackSquare(x,y){

    ctx.fillStyle="black";
    ctx.fillRect(x, y, 100, 100)
}

for( let i = 0; i<= 12; i++){
    
    blackSquare((i*100), i*100);
}


for( let j = 0; j<= 12; j++){
    
    blackSquare((j*100)+200, j*100);
}

for( let k = 0; k<= 12; k++){
    
    blackSquare((k*100)+400, k*100);
}

for( let f = 0; f<= 12; f++){
    
    blackSquare((f*100)-200, f*100);
}