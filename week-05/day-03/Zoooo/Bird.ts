import { Animal } from "./Animal";

class Bird extends Animal {
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