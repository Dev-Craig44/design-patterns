import { UIControl } from "./UIControl";

class ListBox extends UIControl {
  private _selection: string;

  constructor(selection: string) {
    super();
    this._selection = selection;
  }

  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
  }
}
