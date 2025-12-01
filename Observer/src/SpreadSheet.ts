import { Observer } from "./Observer";

// 2.) Define the SpreadSheet class and impelement the Observer interface
export class SpreadSheet implements Observer {
  update(): void {
    console.log("SpreadSheet notified of data change.");
  }
}
