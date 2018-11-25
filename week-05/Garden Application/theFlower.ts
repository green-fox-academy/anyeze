import { Plant } from "./thePlants";
import { Garden } from "./theGarden";
import { Tree } from "./theTree";

class Flower extends Plant {

    constructor(color: string) {
        super(color);
        this.waterAbsorb = 0.75;
    }


    getColor(): string {
        return this.color;
    };
    needWater(): boolean {
        return this.waterCurrAmount < 5;

    }

};

export { Flower };