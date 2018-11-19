import { Plants } from "thePlants";
import { Garden } from "./theGarden";
import { Flower } from "./theFlower";

 class Tree extends Plant{

    constructor( color: string, waterCurrAmount: number, type: string = "Tree"){
        
        super(color, waterCurrAmount, type)

    }
    watering(){

        for(let i = 0; i < super.waterCurrAmount; i++){
            if(super.waterCurrAmount < 10){
    
                super.waterCurrAmount= super.waterCurrAmount+(super.waterUnit*0.40);
        }
    }};
    getColor(){

        return super.color;
    } 
    getType(){
        return super.type;
    }
    addTree(tree: Tree) {
        this.trees.push(tree);
    }
};

export { Tree };