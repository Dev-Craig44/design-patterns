import { Observer } from "./Observer";
export class Chart implements Observer {
  update(value: number): void {
    console.log(`Chart notified of data change: ${value}`);
  }
}
