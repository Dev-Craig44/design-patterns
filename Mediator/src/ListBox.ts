import { DialogBox } from "./DialogBox";
import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
  private _selection: string = "";

  constructor(owner: DialogBox) {
    super(owner);
  }

  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
    this.owner.changed(this);
  }
}
