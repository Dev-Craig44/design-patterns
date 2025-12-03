import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Stock implements Subject {
  private observers: Observer[] = [];
  private prices: Record<string, number> = {};

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  unregisterObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(stockSymbol: string, price: number): void {
    for (const observer of this.observers) {
      observer.update(stockSymbol, price);
    }
  }

  public getPrice(stockSymbol: string): number {
    return this.prices[stockSymbol];
  }

  public setPrice(stockSymbol: string, price: number): void {
    this.prices[stockSymbol] = price;
    this.notifyObservers(stockSymbol, price);
  }

  public toString(): string {
    const entries = Object.entries(this.prices)
      .map(([symbol, price]) => `${symbol}: ${price}`)
      .join(", ");

    return `Stocks{${entries}}`;
  }
}
