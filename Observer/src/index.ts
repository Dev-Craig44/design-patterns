import { StatusBar } from "./exercise/StatusBar";
import { Stock } from "./exercise/Stock";
import { StockListView } from "./exercise/StockListView";

class Main {
  static main(): void {
    const stockListView = new StockListView();
    const statusBar = new StatusBar();

    const appleStock = new Stock("AAPL", 150);
    appleStock.registerObserver(stockListView);
    appleStock.registerObserver(statusBar);

    const googleStock = new Stock("GOOGL", 2800);
    googleStock.registerObserver(stockListView);
    googleStock.registerObserver(statusBar);

    // Simulate stock price updates
    appleStock.setPrice(155);
    googleStock.setPrice(2825);

    console.log("\nStock List View:");
    stockListView.show();

    console.log("\nStatus Bar:");
    statusBar.show();
  }
}

Main.main();
