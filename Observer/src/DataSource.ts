import { Subject } from "./Subject";

export class DataSource extends Subject {
  private _value: number;

  constructor(data: number) {
    super();
    this._value = data;
  }

  public get data(): number {
    return this._value;
  }
  // 7.) Notify observers with the new value
  public set data(value: number) {
    this._value = value;
    this.notifyObservers(value);
  }
}
