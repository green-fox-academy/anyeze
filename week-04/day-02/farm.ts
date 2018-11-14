/*Farm =>
-Reuse your Animal class
-Create a Farm class
        it has list of Animals
        it has slots which defines the number of free places for animals
        breed() -> creates a new animal if there's place for it
        slaughter() -> removes the least hungry animal*/

import { Animal } from "./animal";

class Farm {

    listOfAnimals:  Animal[]=[];
    availableSlots: number = 0;

    breed(){
        if(this.availableSlots !== 0){

            this.listOfAnimals.push(new Animal());
            this.availableSlots--;
        }else{
            console.log("Every slot is taken")
        }
    }

    slaughter(){
  
        for(let i=0; i< this.listOfAnimals[i].hunger; i++){
        
            if(this.listOfAnimals[i].hunger < 55){
                this.listOfAnimals.splice(i,1);
            }
        }
    }

    addAnimal(newAnimal: Animal){

        this.listOfAnimals.push(newAnimal);

    }

    }

function initializeAnimals(): Animal[] {

    return [
        new Animal("tyúkocska",55,30),
        new Animal("libácska",52,24),
        new Animal("disznócska",78,64),
        new Animal("marhácska",77,24)
    ]
}

let listOfAnimals = new Farm;

for (let i = 0; i < initializeAnimals().length; i++) {

    listOfAnimals.addAnimal(initializeAnimals()[i])

}

console.log(listOfAnimals);
console.log("**************************");
listOfAnimals.breed();
console.log(listOfAnimals);
console.log("**************************");
