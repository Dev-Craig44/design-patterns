import { Observer } from "./Observer";

export class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 6.) Pass the value to observers, if we wanted to be generic we could pass any data type
  notifyObservers(value: number): void {
    for (const observer of this.observers) {
      observer.update(value);
    }
  }
}
