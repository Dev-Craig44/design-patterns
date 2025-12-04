import { DialogBox } from "./DialogBox";

export class UIControl {
  // 6.) Add a protected getter for the owner property so that derived classes can access the dialog box mediator.

  // 3.) Add a reference to the dialog box so that the control can know it's dialog box mediator.
  protected owner: DialogBox;

  // 4.) Create a constructor that takes a DialogBox parameter to initialize the owner property.
  constructor(owner: DialogBox) {
    this.owner = owner;
  }
}
