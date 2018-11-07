'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.strokeStyle = "green";
ctx.beginPath()
ctx.moveTo(20, 20);
ctx.lineTo(300, 20);
ctx.stroke();


ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 20);
ctx.lineTo(300, 300);
ctx.stroke();


ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(20, 300);
ctx.stroke();


ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(20, 300);
ctx.lineTo(20, 20);
ctx.stroke();