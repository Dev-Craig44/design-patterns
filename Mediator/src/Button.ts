import { UIControl } from "./UIControl";

export class Button extends UIControl {
  private _isEnabled: boolean = true;

  public getIsEnabled(): boolean {
    return this._isEnabled;
  }

  public setIsEnabled(value: boolean) {
    this._isEnabled = value;
    this.notifyEventHandlers();
  }
}
