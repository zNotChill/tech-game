import { Item } from "../Item";
export declare class SolarSteamGenerator extends Item {
    steamProductionPerTick: number;
    steamEfficiencyInDay: number;
    steamEfficiencyInNight: number;
    steamProductionPerSecond: number;
    totalSteamProduced: number;
    totalSteamStored: number;
    maxSteamStored: number;
    constructor();
    executeOnTick(): void;
}
