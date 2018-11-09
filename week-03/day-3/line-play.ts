'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function linePlay(x){
    
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo( x, 0);
    ctx.lineTo(canvas.width,x);
    ctx.stroke();

}
for(let i = 0; i < 15; i++){

    linePlay(i*40)
}


function lineGreen(y){
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( 0, y);
    ctx.lineTo( y, canvas.height);
    ctx.stroke();

}

for(let j = 0; j < 15; j++){

    lineGreen(j*40)
}