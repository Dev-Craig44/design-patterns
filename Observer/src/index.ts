import { StatusBar } from "./exercise/StatusBar";
import { Stock } from "./exercise/Stock";
import { StockListView } from "./exercise/StockListView";

class Main {
  static main(): void {
    const stockManager = new Stock();

    const statusBar = new StatusBar(["AAPL", "GOOGL", "MSFT"]);
    const stockList = new StockListView();

    stockManager.registerObserver(statusBar);
    stockManager.registerObserver(stockList);

    stockManager.setPrice("AAPL", 190.45);
    stockManager.setPrice("NFLX", 412.3);
    stockManager.setPrice("GOOGL", 2850.1);

    console.log(stockManager.toString());
  }
}

Main.main();
