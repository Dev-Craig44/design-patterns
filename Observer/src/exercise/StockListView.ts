import { Observer } from "./Observer";
import { Stock } from "./Stock";

export class StockListView implements Observer {
  private stocks: Stock[] = [];

  public addStock(stock: Stock): void {
    this.stocks.push(stock);
  }

  public show(): void {
    for (const stock of this.stocks) {
      console.log(stock);
    }
  }

  update(stock: Stock): void {
    console.log(`${this.constructor.name} notified: ${stock.toString()}`);
    this.addStock(stock);
  }
}
