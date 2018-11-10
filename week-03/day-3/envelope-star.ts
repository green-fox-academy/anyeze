'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE



function envelopeStar(x){
        
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(canvas.width/2, x);
    ctx.lineTo(canvas.width/2+x, canvas.height/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( canvas.width/2, x);
    ctx.lineTo( canvas.width/2-x, canvas.height/2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( canvas.width/2, canvas.height-x);
    ctx.lineTo(canvas.width/2-x,canvas.height/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( canvas.width/2, canvas.height-x);
    ctx.lineTo(canvas.width/2+x,canvas.height/2);
    ctx.stroke();
}


for(let i = 0; i < 15; i++){
    envelopeStar(i*((canvas.width/2)/15));    
}
 