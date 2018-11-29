import { readFromFile, writeToFile, appendToFile } from './fileIO';
import { Car} from "./car";
import { CarPark } from "./carpark";


let agisCar = new CarPark();
let bmw = new Car("ASD-123", 1990, 1);
agisCar.addCarToFile(bmw, "car.csv"); // agisCar.addCarToFile(new Car("ASD-123", 1990, 1), "car.csv");

agisCar.removeCar("ASD-123", "car.csv");
