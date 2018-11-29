import { readFromFile, writeToFile, appendToFile } from './fileIO'

export class Car {
    
    protected licensePlate: string;
    protected manufacturerYear: number;
    protected hasParkingTicket: number;

    constructor (licensePlate: string, manufacturerYear: number, hasParkingTicket: number){
        this.licensePlate = licensePlate;
        this.manufacturerYear = manufacturerYear;
        this.hasParkingTicket = hasParkingTicket;
    }
    getLicensePlate(){
        return this.licensePlate;
    }
    getManufacturerYear(){
        return this.manufacturerYear;
    }
    getHasParkingTicket(){
        return this.hasParkingTicket;
    }
}