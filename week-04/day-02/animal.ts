export class Animal {
    hunger: number;
    thirst: number;
    name: string;

    constructor(name: string = "nonamedyet",hunger: number = 50, thirst: number = 50) {
        this.hunger = Math.round(hunger);
        this.thirst = Math.round(thirst);
        this.name = name;
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
    }}