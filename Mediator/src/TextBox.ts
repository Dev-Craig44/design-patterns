import { UIControl } from "./UIControl";

export class TextBox extends UIControl {
  private _content: string = "";

  // 14.) Do the same here by removing the owner from the constructor.

  public getContent(): string {
    return this._content;
  }

  public setContent(value: string) {
    this._content = value;
    this.notifyEventHandlers();
  }
}
