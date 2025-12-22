import { DialogBox } from "./DialogBox";

export class UIControl {
  protected owner: DialogBox;

  constructor(owner: DialogBox) {
    this.owner = owner;
  }
}
