"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventListener_1 = require("./EventListener");
const SolarSteamGenerator_1 = require("./items/steamage/SolarSteamGenerator");
const LowVoltageTurbine_1 = require("./items/electricage/LowVoltageTurbine");
const map = [
    {
        x: 0,
        y: 0,
        item: "solar_steam_generator",
        className: "SolarSteamGenerator"
    },
    {
        x: 1,
        y: 0,
        item: "low_voltage_turbine",
        className: "LowVoltageTurbine"
    }
];
const items = {
    SolarSteamGenerator: SolarSteamGenerator_1.SolarSteamGenerator,
    LowVoltageTurbine: LowVoltageTurbine_1.LowVoltageTurbine
};
const tickingItems = [];
const tickRate = 50;
let currentTick = 0;
map.forEach((cell) => {
    const ItemClass = items[cell.className];
    if (typeof ItemClass === 'function') {
        const item = new ItemClass();
        tickingItems.push(item);
    }
    else {
        console.error(`No constructor found for ${cell.className}`);
    }
});
setInterval(() => {
    currentTick++;
    tickingItems.forEach((item) => {
        item.executeOnTick();
    });
}, tickRate);
EventListener_1.listener.on("stopticking", (data) => {
    tickingItems.forEach((item, index) => {
        if (item.uuid === data.uuid) {
            tickingItems.splice(index, 1);
        }
    });
});
