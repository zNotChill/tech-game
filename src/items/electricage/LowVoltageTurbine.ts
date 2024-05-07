import { Item } from "../Item";

export class LowVoltageTurbine extends Item {
  energyProductionPerTick: number = 0;
  energyProductionPerSecond: number = 0;

  totalEnergyProduced: number = 0;
  totalEnergyStored: number = 0;

  maxEnergyStored: number = 25000;

  totalSteamStored: number = 50000;
  maxSteamStored: number = 50000;

  steamConversionRatio: number = 0.5;

  isProducing: boolean = false;

  constructor() {
    super(2, "low_voltage_turbine", "generator");

    this.energyProductionPerTick = 200;
    this.energyProductionPerSecond = this.energyProductionPerTick / 20;
  }

  public override executeOnTick() {
    this.isProducing = true;
    if ( !this.isProducing ) return;
    if ( this.totalEnergyStored >= this.maxEnergyStored ) {
      console.log("LowVoltageTurbine reached maximum energy capacity. Stopping production.");
      this.isProducing = false;
      return;
    }
    if ( this.totalSteamStored <= 0 ) {
      console.log("LowVoltageTurbine reached minimum steam capacity. Stopping production.");
      this.isProducing = false;
      return;
    }

    this.totalSteamStored -= this.energyProductionPerTick * this.steamConversionRatio;
    if ( this.totalSteamStored < 0 ) {
      this.totalSteamStored = 0;
    }


    console.log("LowVoltageTurbine executed on tick (overridden) producing " + this.energyProductionPerTick + " EU energy. Total stored: " + this.totalEnergyStored + " EU. Total steam stored: " + this.totalSteamStored + " mB");
    this.totalEnergyProduced += this.energyProductionPerTick;
    this.totalEnergyStored += this.energyProductionPerTick;
  }
}