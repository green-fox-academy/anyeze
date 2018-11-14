/*Create a Station and a Car classes
    Station
        gasAmount
        refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
    Car
        gasAmount
        capacity
    create constructor for Car where:
            initialize gasAmount -> 0
            initialize capacity -> 100 
*/    


class Car{

    gasAmount: number = 0;
    capacity: number = 100;

    constructor(gasAmount: number, capacity: number){
       
        this.gasAmount = gasAmount;
        this.capacity = capacity;

    }
}

class Station {
        
    gasAmount: number;

    constructor(gasAmount: number){
        this.gasAmount = gasAmount;
    }

    refill(car: Car){
   
        if(car.gasAmount !== car.capacity){

            this.gasAmount -= (car.capacity-car.gasAmount);
            car.gasAmount += (car.capacity-car.gasAmount); 
           
        }else if( car.gasAmount === car.capacity){

            console.log("the car is full");

        }else if(this.gasAmount === 0){

            console.log("No more fuel left, sorry")}

    }
    
}


let stationMol = new Station(500);

let bmw = new Car(2,200);


console.log(stationMol);
console.log(bmw);
stationMol.refill(bmw);

console.log("-------------------------------------")
console.log(stationMol);
console.log(bmw);
