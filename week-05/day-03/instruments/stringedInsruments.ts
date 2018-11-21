import { Instrument } from "./instrument";

abstract class StringedInstrument extends Instrument{
    numberOfString: number;
    constructor( numberOfString: number, name: string){
        super(name);
        this.numberOfString = numberOfString;
    }
    abstract sound(): void;
    abstract play(): void;
  
}
export { StringedInstrument };