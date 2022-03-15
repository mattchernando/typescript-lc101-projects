"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // Returns the sum of all items using each item's massKg property //
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems //
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg //
        var totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg)
            return true;
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added. //
        var itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            // If true, adds cargo to this.cargoItems and returns true. //
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added. //
        var itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
