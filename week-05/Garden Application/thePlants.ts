import { Tree } from "./theTree";
import { Flower } from "./theFlower";
import { Garden } from "./theGarden";


class Plant {
    protected color: string;
    waterCurrAmount: number;
    waterAbsorb: number;
    constructor(color: string) {
        this.color = color;
        this.waterCurrAmount = 0;
    }
    needWater(): boolean {
        return this.waterCurrAmount === 0;
    }
    getColor(): string {
        return this.color;
    }
};

export { Plant };