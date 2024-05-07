"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    emit(event, ...args) {
        const listeners = this.events[event];
        if (listeners) {
            for (const listener of listeners) {
                listener(...args);
            }
        }
    }
    off(event, listener) {
        const listeners = this.events[event];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
}
