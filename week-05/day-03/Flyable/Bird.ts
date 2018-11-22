import { Animal } from "./Animal"
import { Flyable } from "./flyable";

class Bird extends Animal implements Flyable {
    constructor(name: string, age: number = 2) {
        super(name, age)
    }

    getName() {
        return this.name;
     };
    breed() { 
        return "laying eggs"
    };
}


export { Bird };