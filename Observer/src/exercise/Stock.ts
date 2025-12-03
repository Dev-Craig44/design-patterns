import { Subject } from "./Subject";

export class Stock extends Subject {
  private symbol: string;
  private price: number;

  constructor(symbol: string, price: number) {
    super();
    this.symbol = symbol;
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
    this.notifyObservers(this);
  }

  public toString(): string {
    return `Stock{symbol='${this.symbol}', price=${this.price}}`;
  }
}
