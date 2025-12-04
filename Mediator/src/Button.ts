import { UIControl } from "./UIControl";

class Button extends UIControl {
  private _isEnabled: boolean = true;

  constructor() {
    super();
  }
  public getIsEnabled(): boolean {
    return this._isEnabled;
  }

  public setIsEnabled(value: boolean) {
    this._isEnabled = value;
  }
}
