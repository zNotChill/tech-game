export type Events = "tick" | "stopticking";
declare class EventListener {
    private events;
    on(event: Events, callback: Function): void;
    emit(event: Events, data?: any): void;
}
export declare const listener: EventListener;
export {};
