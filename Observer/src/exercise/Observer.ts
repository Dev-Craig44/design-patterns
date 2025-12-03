export interface Observer {
  update(stockSymbol: string, price: number): void;
}
