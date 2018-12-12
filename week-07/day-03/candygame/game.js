'use strict'
let createCandy = document.querySelector('.create-candies');
let buyLollypops = document.querySelector('.buy-lollypops');
let candyMachine = document.querySelector('.candy-machine');

let candyCounter = document.querySelector('.candies');
let candySecond = document.querySelector('.speed');
let lollypops = document.querySelector('.lollypops');

let candyRainRate = 1;
let counter = 1;

createCandy.addEventListener('click', (e) => {
  counter++;
  candyCounter.innerHTML = counter;
})

let lollyPopCounter = 3;
buyLollypops.addEventListener('click', (e) => {
  if (counter >= 100) {
    counter -= 100;
    lollypops.innerHTML += '🍭';
    lollyPopCounter++;
    candyCounter.innerHTML = counter;
  }
})

const makeCandyRain = () => {
  let candyProductionRate = Math.floor(lollyPopCounter / 10) * candyRainRate;
  counter += candyProductionRate;
  candyCounter.innerHTML = counter;
  candySecond.innerText = candyProductionRate;
}

candyMachine.addEventListener('click', (e) => {
  candyRainRate *= 10;

})

setInterval(makeCandyRain,1000);