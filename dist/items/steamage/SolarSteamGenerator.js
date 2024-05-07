"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarSteamGenerator = void 0;
const Item_1 = require("../Item");
class SolarSteamGenerator extends Item_1.Item {
    constructor() {
        super(1, "solar_steam_generator", "generator");
        this.steamProductionPerTick = 0;
        this.steamEfficiencyInDay = 1;
        this.steamEfficiencyInNight = 0.5;
        this.steamProductionPerSecond = 0;
        this.totalSteamProduced = 0;
        this.totalSteamStored = 0;
        this.maxSteamStored = 50000;
        this.steamProductionPerTick = 35 * this.steamEfficiencyInDay;
        this.steamProductionPerSecond = this.steamProductionPerTick / 20;
    }
    executeOnTick() {
        if (this.totalSteamStored >= this.maxSteamStored) {
            console.log("SolarSteamGenerator reached maximum storage capacity. Stopping production.");
            return;
        }
        console.log("SolarSteamGenerator executed on tick (overridden) producing " + this.steamProductionPerTick + " mB steam with " + this.steamEfficiencyInDay + " efficiency. Total stored: " + this.totalSteamProduced + " mB.");
        this.totalSteamProduced += this.steamProductionPerTick;
        this.totalSteamStored += this.steamProductionPerTick;
    }
}
exports.SolarSteamGenerator = SolarSteamGenerator;
