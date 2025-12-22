import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
  private _selection: string = "";

  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
    this.notifyEventHandlers();
  }
}
