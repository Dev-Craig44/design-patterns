import { Subject } from "./Subject";

export class DataSource extends Subject {
  private _value: number;

  constructor(data: number) {
    super();
    this._value = data;
  }

  public getData(): number {
    return this._value;
  }
  public setData(value: number) {
    this._value = value;
    // 8.) Update call to notifyObservers to not pass data
    this.notifyObservers();
  }
}
