import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        // Returns the sum of all items using each item's massKg property //
        let myTotalMass = 0;
        for(let i=0; i < items.length;i++){
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }

    currentMassKg(): number {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems //
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg //
        let totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg) return true;
        return false;
    }

    addCargo(cargo: Cargo): boolean {
        // Uses this.canAdd() to see if another item can be added. //
        let itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            // If true, adds cargo to this.cargoItems and returns true. //
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }

        }

        addAstronaut(astronaut: Astronaut): boolean {
        // Uses this.canAdd() to see if another astronaut can be added. //
        let itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
        }
    }