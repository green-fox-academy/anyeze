/*Create an abstract Vehicle class
it should have at least 3 fields */

abstract class Vehicle {
    color: string;
    name: string;
    number: number;
    constructor(color: string, name: string, number: number) {
        this.color = color;
        this.name = name;
        this.number = number;
    }
}

export { Vehicle }; 