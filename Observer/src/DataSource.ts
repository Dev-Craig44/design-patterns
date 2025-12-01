import { Subject } from "./Subject";

// 12.) Extend the DataSource class to inherit from Subject
export class DataSource extends Subject {
  private _value: number;

  constructor(data: number) {
    // 13.) Call the super class constructor
    super();
    this._value = data;
  }

  public get data(): number {
    return this._value;
  }
  public set data(value: number) {
    this._value = value;
    // 13.) Call notifyObservers method whenever data changes
    this.notifyObservers();
  }
}
