/*Create a Flyable interface
it should have land, fly and takeOff methods (TakeOff in C#)*/


interface Flyable{
    land(): void;
    fly(): void;
    takeOff(): void;
}

export { Flyable };