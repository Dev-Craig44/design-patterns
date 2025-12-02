import { DataSource } from "./DataSource";
import { Observer } from "./Observer";
export class Chart implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  // 3.) Remove the parameter from update method because each observer will pull the data it needs
  update(): void {
    const value = this.dataSource.getData();
    console.log(`Chart notified of data change: ${value}`);
  }
}
