class Counter {
    integer: number;

constructor(integer: number = 1) {

    this.integer = Math.round(integer);
}

add(number: number =1){
    this.integer += number;
}

get(){
    return this.integer.toString();
}

reset(){

    this.integer = 0;
}
}

let counterOne = new Counter(12);
counterOne.add(10);
console.log(counterOne);
