import { Animal } from "./Animal";

class Reptile extends Animal {
    constructor(name: string, age: number = 5) {
        super(name, age)
    }

    getName() {
        return this.name;
     };
    breed() {
        return "laying eggs"
     };
}


export { Reptile };