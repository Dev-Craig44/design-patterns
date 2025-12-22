import { UIControl } from "./UIControl";

export class Button extends UIControl {
  private _isEnabled: boolean = true;

  // 10.) Remove owner because we don't need it anymore.

  public getIsEnabled(): boolean {
    return this._isEnabled;
  }

  public setIsEnabled(value: boolean) {
    this._isEnabled = value;
    // 11.) Notify observers (mediator) about the change.
    // It would be better to make this method protected in a real-world scenario to prevent external classes from calling it directly.
    this.notifyEventHandlers();
  }
}
