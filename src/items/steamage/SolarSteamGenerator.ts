import { Item } from "../Item";

export class SolarSteamGenerator extends Item {
  constructor() {
    super(1, "solar_steam_generator", "generator");
  }

  public override executeOnTick() {
    console.log("SolarSteamGenerator executed on tick (overridden)");
  }
}