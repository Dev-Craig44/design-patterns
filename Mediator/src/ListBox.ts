import { UIControl } from "./UIControl";

// 2.) Define the ListBox class that extends the UIControl base class.
class ListBox extends UIControl {
  // 3.) Add a selection property to hold the selected item.
  private _selection: string;

  // 4.) Create a constructor to initialize the selection property.
  constructor(selection: string) {
    super();
    this._selection = selection;
  }

  // 5.) Add getter and setter methods for the selection property.
  public getSelection(): string {
    return this._selection;
  }
  public setSelection(value: string) {
    this._selection = value;
  }
}
