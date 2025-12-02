import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
  // 2.) Accept the value parameter
  update(value: number): void {
    // 3.) Use the value parameter
    console.log(`SpreadSheet notified of data change: ${value}`);
  }
}
