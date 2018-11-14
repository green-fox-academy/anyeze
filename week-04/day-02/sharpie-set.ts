/*Reuse your Sharpie class
Create SharpieSet class
    it contains a list of Sharpie
    countUsable() -> sharpie is usable if it has ink in it
    removeTrash() -> removes all unusable sharpies*/


import { Sharpie } from "./sharpie";


class SharpieSet {

    listOfSharpies: Sharpie[] = [];


    countUsable() {
        let counterUsable: number = 0;

        for (let i = 0; i < this.listOfSharpies.length; i++) {

            if (this.listOfSharpies[i].inkAmount !== 0) {
                counterUsable += 1;
            }

        } return counterUsable;
    }
    removeTrash() {

        for (let i = 0; i < this.listOfSharpies.length; i++) {

            if (this.listOfSharpies[i].inkAmount === 0) {

                this.listOfSharpies.splice(i, 1);
            }
        }
    }

    addSharpie(sharpie: Sharpie) {

        this.listOfSharpies.push(sharpie);

    }

}
function initializeSharpies(): Sharpie[] {

    return [

        new Sharpie("orange", 52, 0),
        new Sharpie("blue", 52, 85),
        new Sharpie("green", 52, 0),
        new Sharpie("pink", 54, 99),

    ]

}

let listOfSharpies = new SharpieSet;

for (let i = 0; i < initializeSharpies().length; i++) {

    listOfSharpies.addSharpie(initializeSharpies()[i])

}


console.log(listOfSharpies);
console.log("---------");
console.log(listOfSharpies.countUsable());
console.log("---------");
console.log(listOfSharpies);
console.log("---------");
listOfSharpies.removeTrash();
console.log(listOfSharpies);