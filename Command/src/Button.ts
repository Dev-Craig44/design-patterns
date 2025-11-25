class Button {
  private _label: string;

  constructor(label: string) {
    this._label = label;
  }

  public get label(): string {
    return this._label;
  }
  public set label(value: string) {
    this._label = value;
  }

  public click(): void {
    console.log(`Button ${this._label} clicked`);
  }
}
