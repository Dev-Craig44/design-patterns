import { Observer } from "./Observer";
import { Stock } from "./Stock";

export class StatusBar implements Observer {
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
    //   notify the status bar about stock updates
    console.log(`${this.constructor.name} notified: ${stock.toString()}`);

    //
    const exists = this.stocks.includes(stock);
    if (!exists) {
      this.addStock(stock);
    }
  }
}
