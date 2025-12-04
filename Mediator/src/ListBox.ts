import { DialogBox } from "./DialogBox";
import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
  private _selection: string = "";

  // 5.) Give the ListBox constructor a DialogBox parameter and pass it to the base constructor.
  constructor(owner: DialogBox) {
    super(owner);
  }

  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
    // 7.) Notify the dialog box mediator that the control has changed.
    this.owner.changed(this);
  }
}
