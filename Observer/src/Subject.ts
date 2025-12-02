import { Observer } from "./Observer";

export class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 7.) Update notifyObservers to no longer pass data
  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
