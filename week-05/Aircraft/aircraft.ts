class Aircraft {
    currAmmo: number = 0;
    maxAmmo: number;
    baseDamage: number;

    constructor(maxAmmo: number, baseDamage: number) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;

    }
    fight(): number {
        this.currAmmo = 0;
        let damage = this.baseDamage * this.currAmmo;
        return damage;
    }
    refill(refillAmount: number): number {
        let remainingAmmo: number = 0;
        if (refillAmount + this.currAmmo > this.maxAmmo) {
            remainingAmmo = refillAmount - (this.maxAmmo - this.currAmmo);
            this.currAmmo = this.maxAmmo
        } else {
            this.currAmmo += refillAmount;
        }
        return remainingAmmo;
    }
    getType(): string {
        return this.constructor.name;
    }
    getStatus() {
        return `Type ${this.getType()}, Ammo: ${this.currAmmo}, Base Damage: ${this.baseDamage}, All damage: ${this.getAllDamage()} `;
    }
    isPriority(): boolean {
        return this.getType() === 'F35';
    }
    getAllDamage(): number {
        return this.baseDamage * this.currAmmo;
    }
   
};

export { Aircraft };