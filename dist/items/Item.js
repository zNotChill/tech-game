"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const EventListener_1 = require("../EventListener");
class Item {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.uuid = Math.random().toString(36).substring(7);
    }
    executeOnTick() {
        console.log(`${this.name} executed on tick`);
    }
    // overriding this is not desirable
    stopTicking() {
        console.log(`${this.name} stopped ticking`);
        EventListener_1.listener.emit("stopticking", { item: this.name, uuid: this.uuid });
    }
}
exports.Item = Item;
