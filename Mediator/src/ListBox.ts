import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
  private _selection: string = "";

  // 13.) Make the same change here by removing the owner from the constructor.

  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
    this.notifyEventHandlers();
  }
}
