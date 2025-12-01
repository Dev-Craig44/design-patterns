// 1.) create DataSource class
export class DataSource {
  // 2.) add private field _data for the val
  private _value: number;

  // 4.) add constructor to initialize _value
  constructor(data: number) {
    this._value = data;
  }

  // 3.) add public getter and setter for data
  public get data(): number {
    return this._value;
  }
  public set data(value: number) {
    this._value = value;
  }
}
