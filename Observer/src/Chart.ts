import { Observer } from "./Observer";

export class Chart implements Observer {
  update(): void {
    console.log("Chart notified of data change.");
  }
}
