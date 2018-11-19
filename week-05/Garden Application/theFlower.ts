import { Plant } from "./thePlants";
import { Garden } from "./theGarden";
import { Tree } from "./theTree";

class Flower extends Plant{

    constructor( color: string, waterCurrAmount: number, type: string = "Flower"){
        super(color, waterCurrAmount, type)
    }

watering(waterUnit){
    for(let i = 0; i < this.waterCurrAmount; i++){
       
        if(this.waterCurrAmount < 5){

            this.waterCurrAmount= this.waterCurrAmount+(waterUnit*0.75);
    }
    }}
getColor(){
        return super.color;
    }; 

getType(){
        return super.type;
    }
    addFlower(flower: Flower) {
        this.flower.push(flower);
    }

};

export { Flower };