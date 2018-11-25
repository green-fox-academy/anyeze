import { Flower } from "./theFlower";
import { Tree } from "./theTree";
import { Plant } from "./thePlants";
import { Garden } from "./theGarden";

let azEnKisKertem = new Garden('AzÉnKisKertem');

let salátaBoglárka = new Flower('yellow');
let nefelejcs = new Flower('blue');
let orgona = new Tree('purple');
let kecskerágó = new Tree('orange');

azEnKisKertem.plants.push(salátaBoglárka);
azEnKisKertem.plants.push(nefelejcs);
azEnKisKertem.plants.push(orgona);
azEnKisKertem.plants.push(kecskerágó);


console.log('****************************************************');

azEnKisKertem.plantInfo();
console.log('****************************************************');

azEnKisKertem.watering(40);
console.log('****************************************************');

azEnKisKertem.watering(70);
console.log('****************************************************');



