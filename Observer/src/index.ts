import { Chart } from "./Chart";
import { DataSource } from "./DataSource";
import { SpreadSheet } from "./SpreadSheet";

class Main {
  static main(): void {
    const dataSource = new DataSource(0);
    const sheet1 = new SpreadSheet();
    const sheet2 = new SpreadSheet();
    const chart = new Chart();

    dataSource.addObserver(sheet1);
    dataSource.addObserver(sheet2);
    dataSource.addObserver(chart);

    dataSource.data = 10;
  }
}

Main.main();
