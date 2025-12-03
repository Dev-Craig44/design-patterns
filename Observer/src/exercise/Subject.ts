import { Observer } from "./Observer";

export class Subject {
  observers: Observer[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  unregisterObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}
