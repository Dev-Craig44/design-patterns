import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
  update(value: number): void {
    console.log(`SpreadSheet notified of data change: ${value}`);
  }
}
