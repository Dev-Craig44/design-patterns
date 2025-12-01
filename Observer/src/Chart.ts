import { Observer } from "./Observer";

// 3.) Define the Chart class and impelement the Observer interface
export class Chart implements Observer {
  update(): void {
    console.log("Chart notified of data change.");
  }
}
