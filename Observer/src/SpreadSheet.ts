import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
  update(): void {
    console.log("SpreadSheet notified of data change.");
  }
}
