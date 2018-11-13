class Thing {
    private _name: string;
    private _completed = false;

    constructor(name: string){
        this._name = name;
    }

    public complete() {
        this._completed = true;
    }

    get name(){
        return this._name;
    }
    get completed(){
        return this._completed;
    }
}



class Fleet {
    private _things: Thing[];

    constructor() {
        this._things = [];
    }

    add(thing: Thing) {
        this._things.push(thing);
    }
    get things(){
        return this._things;
    }
}



let fleet = new Fleet();
let listOfThings: Thing[] = [
    new Thing ('Get milk'),
    new Thing ('Remove the obstacles'),
    new Thing ('Stand up'),
    new Thing ('Eat lunch')

]

for(let i =  0; i< listOfThings.length; i++){
    fleet.add(listOfThings[i]);
    if(i >= 2){
        listOfThings[i].complete();
    }
}

fleet.things.forEach(function(element, index, array){
    if(element.completed){
        console.log('[x]' + this.name);
    } else {
        console.log('[]' + this.name);
    }
})

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

