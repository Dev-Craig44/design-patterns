import { Observer } from "./Observer";

export class StatusBar implements Observer {
  private popularStocks: Set<string>;

  constructor(popularStocks: string[]) {
    this.popularStocks = new Set(popularStocks);
  }

  update(stockSymbol: string, price: number): void {
    if (this.popularStocks.has(stockSymbol)) {
      console.log(
        `StatusBar: Popular stock ${stockSymbol} updated to price ${price}`
      );
    }
  }
}
