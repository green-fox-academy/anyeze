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

export { Thing };