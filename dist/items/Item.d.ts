export declare class Item {
    id: number;
    name: string;
    type: string;
    uuid: string;
    constructor(id: number, name: string, type: string);
    executeOnTick(): void;
    stopTicking(): void;
}
