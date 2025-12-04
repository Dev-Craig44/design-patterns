import { UIControl } from "./UIControl";

// 1.) Define the DialogBox abstract  class that takes a UIControl
export abstract class DialogBox {
  // 2.) Add a changed() method that takes a UIControl as a parameter so that concrete dialog boxes will know when a control has changed.
  changed(control: UIControl): void {}
}
