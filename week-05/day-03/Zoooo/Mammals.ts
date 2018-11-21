import { Animal } from "./Animal";

class Mammal extends Animal {
    constructor(name: string, age: number = 3) {
        super(name, age)
    }

    getName() {
        return this.name;
     };
    breed() { 
        return "pushing miniature versions out";
    };
}


export { Mammal };