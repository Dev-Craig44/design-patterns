import { UIControl } from "./UIControl";

export abstract class DialogBox {
  changed(control: UIControl): void {}
}
