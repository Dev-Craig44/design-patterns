import { Stock } from "./Stock";

export class StockListView {
  private stocks: Stock[] = [];

  public addStock(stock: Stock): void {
    this.stocks.push(stock);
  }

  public show(): void {
    for (const stock of this.stocks) {
      console.log(stock);
    }
  }
}
