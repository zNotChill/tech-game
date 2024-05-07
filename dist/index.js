"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventListener_1 = require("./EventListener");
const SolarSteamGenerator_1 = require("./items/steamage/SolarSteamGenerator");
const map = [
    {
        x: 0,
        y: 0,
        item: "solar_steam_generator",
        className: "SolarSteamGenerator"
    }
];
const items = {
    SolarSteamGenerator: SolarSteamGenerator_1.SolarSteamGenerator
};
const tickingItems = [];
const tickRate = 20;
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
    tickingItems.forEach((item) => {
        item.executeOnTick();
    });
}, tickRate);
EventListener_1.listener.on("stopticking", (data) => {
    console.log("stopticking event received from", data.item);
    tickingItems.forEach((item, index) => {
        if (item.uuid === data.uuid) {
            tickingItems.splice(index, 1);
        }
    });
});
