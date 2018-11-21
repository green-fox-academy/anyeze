/*Printable interface
Create a new interface called Printable
it should have one method definition called printAllFields
implement this interface on the Domino, Todo*/
import { Printable } from "./printable"

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    printAllFields() {
        console.log(this.values);
    }
}
export { Domino };