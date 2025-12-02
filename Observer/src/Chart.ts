import { Observer } from "./Observer";
export class Chart implements Observer {
  // 4.) Accept the value parameter
  update(value: number): void {
    // 5.) Use the value parameter
    console.log(`Chart notified of data change: ${value}`);
  }
}
