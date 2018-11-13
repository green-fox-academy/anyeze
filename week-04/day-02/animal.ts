class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    public eat() {
        this.hunger -= 1;
    }
    public drink() {
        this.thirst -= 1;
    }
    public play() {
        this.thirst -= 1;
        this.hunger -= 1;
    }

}
let a1 = new Animal();

a1.play();

console.log(a1);