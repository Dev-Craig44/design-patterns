// 6.) Define the TextBox class that extends UIControl.
import { UIControl } from "./UIControl";

class TextBox extends UIControl {
  // 7.) Create a field for content
  private _content: string = "";

  constructor(content: string) {
    super();
    this._content = content;
  }

  // 8.) Create getter and setter methods for content
  public getContent(): string {
    return this._content;
  }

  public setContent(value: string) {
    this._content = value;
  }
}
