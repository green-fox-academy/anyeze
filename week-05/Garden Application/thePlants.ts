import { Tree } from "./theTree";
import { Flower } from "./theFlower";
import { Garden } from "./theGarden";


class Plant extends Garden {

    protected type: string;
    protected color: string;
    protected waterCurrAmount: number;

    constructor(color: string, waterCurrAmount: number, type: string) {

        this.plants = plants;
        this.color = color;
        this.waterCurrAmount = waterCurrAmount;
        this.type = type;

    }

    watering(waterUnit: number) {
        this.waterCurrAmount += waterUnit;
    }

    getColor() {
        return this.color;
    }

    getType() {
        return this.type;
    }
}

export { Plant };