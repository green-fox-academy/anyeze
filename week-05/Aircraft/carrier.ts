import { Aircraft } from "./aircraft";

class Carrier {
    airCrafts: Aircraft[] = [];
    storeOfAmmo: number;
    healthPoint: number;
    constructor(storeOfAmmo: number, healthPoint: number) {
        this.storeOfAmmo = storeOfAmmo;
        this.healthPoint = healthPoint;
    }
    addAircraft(aircraft: Aircraft) {
        this.airCrafts.push(aircraft);

    }
    fill() {
        if (this.storeOfAmmo === 0) {
            throw 'Carrier is out of ammo';
        } else {
            this.airCrafts.forEach(aircraft => {
                if (aircraft.isPriority() && this.storeOfAmmo > 0) {
                    this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
                }
            });
            this.airCrafts.forEach(aircraft => {
                if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
                    this.storeOfAmmo = aircraft.refill(this.storeOfAmmo)
                }
            });
        }
    }
    fight(anotherCarrier: Carrier) {
        this.airCrafts.forEach(aircraft => {
            anotherCarrier.healthPoint -= aircraft.fight();
        });
    }
    getStatus() {
        let status = `HP: ${this, this.healthPoint}, Aircraft count: ${this.airCrafts.length}, Ammo storage: ${this.storeOfAmmo} Total damage: ${this.getTotalDamage()}
        Aircrafts:`;
        this.airCrafts.forEach(aircraft => {
            status += `\r\n${aircraft.getStatus()}`
        });

        /* if(this.healthPoint > 0){
             return status;
 
         }else{
             return "It's dead Jim :(";
         }*/
        return this.healthPoint > 0 ? status : `It's dead Jim :(`

    }
    getTotalDamage(): number {
        let totalDamage = 0;
        this.airCrafts.forEach(aircraft => {
            totalDamage += aircraft.getAllDamage();

        });
        return totalDamage;
    }
}
export { Carrier };