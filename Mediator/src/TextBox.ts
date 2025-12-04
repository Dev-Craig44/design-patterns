import { UIControl } from "./UIControl";

class TextBox extends UIControl {
  private _content: string = "";

  constructor(content: string) {
    super();
    this._content = content;
  }

  public getContent(): string {
    return this._content;
  }

  public setContent(value: string) {
    this._content = value;
  }
}
