import { DialogBox } from "./DialogBox";
import { UIControl } from "./UIControl";

// 8.) Do the same for the Button class that was done for the ListBox and TextBox classes.
export class Button extends UIControl {
  private _isEnabled: boolean = true;

  constructor(owner: DialogBox) {
    super(owner);
  }
  public getIsEnabled(): boolean {
    return this._isEnabled;
  }

  public setIsEnabled(value: boolean) {
    this._isEnabled = value;
    this.owner.changed(this);
  }
}
