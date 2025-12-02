import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  update(): void {
    const value = this.dataSource.getData();
    console.log(`SpreadSheet notified of data change: ${value}`);
  }
}
