import { Item } from "../Item";
export declare class LowVoltageTurbine extends Item {
    energyProductionPerTick: number;
    energyProductionPerSecond: number;
    totalEnergyProduced: number;
    totalEnergyStored: number;
    maxEnergyStored: number;
    totalSteamStored: number;
    maxSteamStored: number;
    steamConversionRatio: number;
    isProducing: boolean;
    constructor();
    executeOnTick(): void;
}
