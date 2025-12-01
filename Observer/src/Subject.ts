import { Observer } from "./Observer";

// 4.) Define the Subject class this is usually called observable in the gang of four book
export class Subject {
  // 8.) Create a private observers array to hold all observers
  private observers: Observer[] = [];

  // 5.) Add addObserver method and give it a Ovserver parameter
  addObserver(observer: Observer): void {
    // 9.) Add the observer to the observers array
    this.observers.push(observer);
  }

  // 6.) Add removeObserver method and give it a Ovserver parameter
  removeObserver(observer: Observer): void {
    // 10.) Remove the observer from the observers array
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 7.) Add notifyObservers method
  notifyObservers(): void {
    // 11.) Loop through all observers and call their update method
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
