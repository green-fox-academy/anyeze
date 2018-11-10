'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function linePlay(x){
        
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(canvas.width/2, x);
    ctx.lineTo(canvas.width/2+x, canvas.height/2);
    ctx.stroke();
         
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( canvas.width/2, canvas.height/2+x);
    ctx.lineTo( canvas.width/2+x, canvas.height);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( 0, canvas.height/2+x);
    ctx.lineTo( x, canvas.height);
    ctx.stroke();
     
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo( 0, x);
    ctx.lineTo( x, canvas.height/2);
    ctx.stroke();
 
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo( x, 0);
    ctx.lineTo(canvas.width/2,x);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo( canvas.width/2+x, 0);
    ctx.lineTo(canvas.width,x);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo( canvas.width/2+x, canvas.height/2);
    ctx.lineTo(canvas.width,canvas.height/2+x);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo( x, canvas.height/2);
    ctx.lineTo(canvas.width/2,canvas.height/2+x);
    ctx.stroke();
}



for(let i = 0; i < 15; i++){

    linePlay(i*((canvas.width/2)/15))
    
};
 