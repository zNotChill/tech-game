
import { listener } from "./EventListener";
import {SolarSteamGenerator} from "./items/steamage/SolarSteamGenerator"

const map = [
  {
    x: 0,
    y: 0,
    item: "solar_steam_generator",
    className: "SolarSteamGenerator"
  }
]

const items = {
  SolarSteamGenerator
}

const tickingItems: any[] = [];
const tickRate = 20;

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
  tickingItems.forEach((item) => {
    item.executeOnTick();
  });
}, tickRate);

listener.on("stopticking", (data) => {
  console.log("stopticking event received from", data.item);
  
  tickingItems.forEach((item, index) => {
    if (item.uuid === data.uuid) {
      tickingItems.splice(index, 1);
    }
  });
});