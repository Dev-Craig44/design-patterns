import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
  // 4.) This concrete observer needs to know about the DataSource to pull data from it
  private dataSource: DataSource;

  // 5.) Inject the DataSource via constructor
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  // 2.) Remove the parameter from update method because each observer will pull the data it needs
  update(): void {
    // 6.) Now we call the data source to get the latest data
    const value = this.dataSource.getData();
    console.log(`SpreadSheet notified of data change: ${value}`);
  }
}
