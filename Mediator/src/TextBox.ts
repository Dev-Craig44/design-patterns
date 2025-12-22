import { UIControl } from "./UIControl";

export class TextBox extends UIControl {
  private _content: string = "";

  public getContent(): string {
    return this._content;
  }

  public setContent(value: string) {
    this._content = value;
    this.notifyEventHandlers();
  }
}
