import { UIControl } from "./UIControl";

class Button extends UIControl {
  // 9.) Create Boolean field to indicate whether the button is enabled
  private _isEnabled: boolean = true;

  constructor() {
    super();
  }
  // 10.) Create getter and setter methods for isEnabled
  public getIsEnabled(): boolean {
    return this._isEnabled;
  }

  public setIsEnabled(value: boolean) {
    this._isEnabled = value;
  }
}
