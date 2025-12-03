import { Observer } from "./Observer";

export class StockListView implements Observer {
  update(stockSymbol: string, price: number): void {
    console.log(
      `StockListView: Stock ${stockSymbol} updated to price ${price}`
    );
  }
}
