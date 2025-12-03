import { Observer } from "./Observer";

export interface Subject {
  registerObserver(observer: Observer): void;

  unregisterObserver(observer: Observer): void;

  notifyObservers(stockSymbol: string, price: number): void;
}
