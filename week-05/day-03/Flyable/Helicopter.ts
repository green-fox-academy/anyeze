/*Extend Helicopter class from Vehicle
implement your Flyable interface*/


import { Vehicle } from "./Vehicle";
import { Flyable } from "./flyable";

class Helicopter extends Vehicle implements Flyable{
    constructor(color: string, name: string, number: number ){
        super(color, name, number);
    }
    land(){}
    fly(){}
    takeOff(){}

}