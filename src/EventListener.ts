
export type Events = "tick" | "stopticking";

class EventListener {
  private events: Record<Events, Function[]> = {
    tick: [],
    stopticking: []
  };

  public on(event: Events, callback: Function) {
    this.events[event].push(callback);
  }

  public emit(event: Events, data?: any) {
    this.events[event].forEach((callback) => {
      callback(data);
    });
  }
}

export const listener = new EventListener();