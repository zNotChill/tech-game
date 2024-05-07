import { Item } from "../Item";

export class SolarSteamGenerator extends Item {
  steamProductionPerTick: number = 0;
  steamEfficiencyInDay: number = 1;
  steamEfficiencyInNight: number = 0.5;

  steamProductionPerSecond: number = 0;

  totalSteamProduced: number = 0;
  totalSteamStored: number = 0;

  maxSteamStored: number = 50000;

  constructor() {
    super(1, "solar_steam_generator", "generator");

    this.steamProductionPerTick = 35 * this.steamEfficiencyInDay;
    this.steamProductionPerSecond = this.steamProductionPerTick / 20;
  }

  public override executeOnTick() {
    if ( this.totalSteamStored >= this.maxSteamStored ) {
      console.log("SolarSteamGenerator reached maximum storage capacity. Stopping production.");
      return;
    }
    console.log("SolarSteamGenerator executed on tick (overridden) producing " + this.steamProductionPerTick + " mB steam with " + this.steamEfficiencyInDay + " efficiency. Total stored: " + this.totalSteamProduced + " mB.");
    this.totalSteamProduced += this.steamProductionPerTick;
    this.totalSteamStored += this.steamProductionPerTick;
  }
}