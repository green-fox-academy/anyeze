'use strict';


// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let secondsInaDay: number = 86400;
let currentTimeinSeconds: number = ((currentHours*60*60) + (currentMinutes*60) + currentSeconds)

let remainingSeconds: number= secondsInaDay - currentTimeinSeconds;

console.log("Remaining seconds: "+ remainingSeconds);