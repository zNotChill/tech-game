"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
class EventListener {
    constructor() {
        this.events = {
            tick: [],
            stopticking: []
        };
    }
    on(event, callback) {
        this.events[event].push(callback);
    }
    emit(event, data) {
        this.events[event].forEach((callback) => {
            callback(data);
        });
    }
}
exports.listener = new EventListener();
