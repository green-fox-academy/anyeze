import { Flower } from "./theFlower";
import { Tree } from "./theTree";
import { Plant } from "./thePlants";
import { Garden } from "./theGarden";

let flowers = [];

let flowerTheFirst = new Flower("yellow", 15, "Flower");
flowers.push(flowerTheFirst);
let flowerTheSecond = new Flower("blue", 18, "Flower");
flowers.push(flowerTheSecond);

let trees = [];

let treeTheFirst = new Tree("purple", 40, "Tree");
trees.push(treeTheFirst);
let treeTheSecond = new Tree ("orange", 50, "Tree");
trees.push(treeTheSecond);
