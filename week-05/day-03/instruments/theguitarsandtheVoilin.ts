import { StringedInstrument } from "./stringedInsruments";


class ElectricGuitar extends StringedInstrument {
    constructor( numberOfString: number = 6, name: string = "Electric Guitar") {
        super(numberOfString, name);
        this.name = name;
        this.numberOfString = numberOfString;
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`);
    }
    sound() {
        return 'Twang';
    }
}
class BassGuitar extends StringedInstrument {

    constructor( numberOfString: number = 4, name: string = "BassGuitar") {
        super(numberOfString, name);
        this.name = name;
        this.numberOfString = numberOfString;
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`);
    }
    sound() {
        return 'Duum-duum-duum';
    }
}

class Violin extends StringedInstrument {
    constructor( numberOfString: number = 4, name: string = "Violin") {
        super(numberOfString, name);
        this.name = name;
        this.numberOfString = numberOfString;
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`);
    }
    sound() {
        return 'Screech';
    }
}
export { ElectricGuitar };
export { BassGuitar };
export { Violin };