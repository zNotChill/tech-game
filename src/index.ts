
import { listener } from "./EventListener";
import {SolarSteamGenerator} from "./items/steamage/SolarSteamGenerator"
import {LowVoltageTurbine} from "./items/electricage/LowVoltageTurbine";

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
]

const items = {
  SolarSteamGenerator,
  LowVoltageTurbine
}

const tickingItems: any[] = [];
const tickRate = 50;
let currentTick = 0;

map.forEach((cell) => {
  const ItemClass = items[cell.className];
  if (typeof ItemClass === 'function') {
    const item = new ItemClass();
    tickingItems.push(item);
  } else {
    console.error(`No constructor found for ${cell.className}`);
  }
});

setInterval(() => {
  currentTick++;
  
  tickingItems.forEach((item) => {
    item.executeOnTick();
  });
}, tickRate);

listener.on("stopticking", (data) => {
  tickingItems.forEach((item, index) => {
    if (item.uuid === data.uuid) {
      tickingItems.splice(index, 1);
    }
  });
});