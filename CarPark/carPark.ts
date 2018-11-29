import { Car } from "./car";
import { readFromFile, writeToFile, appendToFile } from './fileIO'

export class CarPark {
    cars: Car[] = [];

    addCar(car: Car) {
        this.cars.push(car);
    }
    addCarToFile(car: Car, fileName: string) {
        appendToFile(fileName, `\r\n${car.getLicensePlate()},${car.getManufacturerYear()},${car.getHasParkingTicket()}`);
    }

    removeCar(licensePlate: string, fileName: string): void {
        this.cars.forEach((e, i) => {
            if (e.getLicensePlate() === licensePlate) {
                this.cars.splice(i, 1);
            }
        });
        let fileContent = readFromFile(fileName);
        if (fileContent !== null) {
            let parkplace: string[] = fileContent.split('\r\n');
            parkplace.forEach((line, i) => {
                if (line.indexOf(licensePlate) !== -1) {
                    parkplace.splice(i, 1);
                }
            });
            writeToFile(fileName, parkplace.join('\r\n'));

        }

    }
    getOldest(fileName: string): string {
        let theFile: string = readFromFile(fileName);
        if (theFile !== null) {
            let evszamok: string[] = theFile.split('\r\n');
            let carArray: Car[] = evszamok.map(line => {
                return new Car(line.split(',')[0], parseInt(line.split(',')[1]), parseInt(line.split(',')[2]));
            });
            carArray.sort(function (a, b) {
                return a.getManufacturerYear() - b.getManufacturerYear();
            });
            return carArray[0].getLicensePlate();
        }

    }
    getPenalty(fileName: string) {
        let theFile: string = readFromFile(fileName);
        if (theFile !== null) {
            let filecontentsplitted: string[] = theFile.split('\r\n');
            let carList: Car[] = filecontentsplitted.map(line => {
                return new Car(line.split(',')[0], parseInt(line.split(',')[1]), parseInt(line.split(',')[2]));
            });
            return carList.filter(car => {
                car.getHasParkingTicket() === 0;
            });
        }
    }
}       