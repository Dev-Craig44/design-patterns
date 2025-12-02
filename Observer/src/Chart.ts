import { DataSource } from "./DataSource";
import { Observer } from "./Observer";
export class Chart implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  update(): void {
    const value = this.dataSource.getData();
    console.log(`Chart notified of data change: ${value}`);
  }
}
