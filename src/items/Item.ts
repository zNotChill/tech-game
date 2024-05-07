
import { listener } from "../EventListener";

export class Item {
  id: number;
  name: string;
  type: string;
  uuid: string;

  constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.uuid = Math.random().toString(36).substring(7);
  }

  public executeOnTick() {
    console.log(`${this.name} executed on tick`);
  }

  // overriding this is not desirable
  public stopTicking() {
    console.log(`${this.name} stopped ticking`);
    listener.emit("stopticking", { item: this.name, uuid: this.uuid });
  }
}