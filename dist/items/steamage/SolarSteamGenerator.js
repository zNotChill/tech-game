"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarSteamGenerator = void 0;
const Item_1 = require("../Item");
class SolarSteamGenerator extends Item_1.Item {
    constructor() {
        super(1, "solar_steam_generator", "generator");
    }
    executeOnTick() {
        console.log("SolarSteamGenerator executed on tick (overridden)");
    }
}
exports.SolarSteamGenerator = SolarSteamGenerator;
