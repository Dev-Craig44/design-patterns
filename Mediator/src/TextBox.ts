import { DialogBox } from "./DialogBox";
import { UIControl } from "./UIControl";

//  7.) Do the same for the TextBox class that was done for the ListBox class.
export class TextBox extends UIControl {
  private _content: string = "";

  constructor(owner: DialogBox) {
    super(owner);
  }

  public getContent(): string {
    return this._content;
  }

  public setContent(value: string) {
    this._content = value;
    this.owner.changed(this);
  }
}
