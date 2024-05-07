"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowVoltageTurbine = void 0;
const Item_1 = require("../Item");
class LowVoltageTurbine extends Item_1.Item {
    constructor() {
        super(2, "low_voltage_turbine", "generator");
        this.energyProductionPerTick = 0;
        this.energyProductionPerSecond = 0;
        this.totalEnergyProduced = 0;
        this.totalEnergyStored = 0;
        this.maxEnergyStored = 25000;
        this.totalSteamStored = 50000;
        this.maxSteamStored = 50000;
        this.steamConversionRatio = 0.5;
        this.isProducing = false;
        this.energyProductionPerTick = 200;
        this.energyProductionPerSecond = this.energyProductionPerTick / 20;
    }
    executeOnTick() {
        this.isProducing = true;
        if (!this.isProducing)
            return;
        if (this.totalEnergyStored >= this.maxEnergyStored) {
            console.log("LowVoltageTurbine reached maximum energy capacity. Stopping production.");
            this.isProducing = false;
            return;
        }
        if (this.totalSteamStored <= 0) {
            console.log("LowVoltageTurbine reached minimum steam capacity. Stopping production.");
            this.isProducing = false;
            return;
        }
        this.totalSteamStored -= this.energyProductionPerTick * this.steamConversionRatio;
        if (this.totalSteamStored < 0) {
            this.totalSteamStored = 0;
        }
        console.log("LowVoltageTurbine executed on tick (overridden) producing " + this.energyProductionPerTick + " mB steam. Total stored: " + this.totalEnergyStored + " EU. Total steam stored: " + this.totalSteamStored + " mB");
        this.totalEnergyProduced += this.energyProductionPerTick;
        this.totalEnergyStored += this.energyProductionPerTick;
    }
}
exports.LowVoltageTurbine = LowVoltageTurbine;
