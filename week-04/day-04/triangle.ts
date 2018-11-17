const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');





function triangle(x, y, size, i ){

    ctx.beginPath();
    ctx.moveTo(x+size/2, y+size);
    ctx.lineTo(x, y);
    ctx.stroke();

    /*ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+size, y);
    ctx.lineTo(x+size/2, y+size);
    ctx.stroke();

//---------------------------------

    ctx.beginPath();
    ctx.moveTo(x+size/2, y);
    ctx.lineTo(x+size/4, y+size/2);
    ctx.stroke();

  ctx.beginPath();
    ctx.moveTo(x+size/2, y);
    ctx.lineTo(3*(x+size/4), y+size/2);
    ctx.stroke();

   ctx.beginPath();
    ctx.moveTo(3*(x+size/4), y+size/2);
    ctx.lineTo(x+size/4, y+size/2);
    ctx.stroke();

if(i>1){
    triangle(x, y, y+size/2, i-1 );
  
    
   
    
}

    
}*/

triangle(0,0,600,6)