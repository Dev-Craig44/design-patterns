export class DataSource {
  private _value: number;

  constructor(data: number) {
    this._value = data;
  }

  public get data(): number {
    return this._value;
  }
  public set data(value: number) {
    this._value = value;
  }
}
