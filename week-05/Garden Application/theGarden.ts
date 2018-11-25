import { Flower } from "./theFlower";
import { Tree } from "./theTree";
import { Plant } from "./thePlants";

class Garden {

    name: string;
    plants: Flower[] | Tree[];

    constructor(name: string) {
        this.name = name;
        this.plants = [];
    }
    plantInfo(): void {
        for (let i = 0; i < this.plants.length; i++) {
            console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} needs water`);
        }
    }
    watering(waterAmount: number): void {
        console.log(`Watering with ${waterAmount}`);
        let thirstyPlants = 0;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].needWater()) {
                thirstyPlants++;
                this.plants[i].waterCurrAmount += waterAmount / thirstyPlants * this.plants[i].waterAbsorb;
                if (this.plants[i].needWater()) {
                    console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} needs water`);
                } else {
                    console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} doesn't need water`);
                }

            } else {
                console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} doesn't need water`);
            }
        }
    }
};

export { Garden };