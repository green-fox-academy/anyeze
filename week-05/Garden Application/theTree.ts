import { Plant } from "./thePlants";
import { Garden } from "./theGarden";
import { Flower } from "./theFlower";

class Tree extends Plant {
    constructor(color: string) {
        super(color);
        this.waterAbsorb = 0.4;
    }
    needWater(): boolean {
        return this.waterCurrAmount < 10;
    };
    getColor(): string {
        return this.color;
    }
};

export { Tree };