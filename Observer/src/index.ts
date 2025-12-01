import { Chart } from "./Chart";
import { DataSource } from "./DataSource";
import { SpreadSheet } from "./SpreadSheet";

class Main {
  static main(): void {
    // 1.) Grab a instance of the DataSource
    const dataSource = new DataSource(0);
    // 2.) Create a new SpreadSheet and Chart observer
    const sheet1 = new SpreadSheet();
    const sheet2 = new SpreadSheet();
    const chart = new Chart();

    // 3.) Tell the data source to register these objects as observers
    dataSource.addObserver(sheet1);
    dataSource.addObserver(sheet2);
    dataSource.addObserver(chart);

    // 4.) Change the data in the data source
    dataSource.data = 10;
  }
}

Main.main();
