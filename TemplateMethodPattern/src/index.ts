import { ModalWindow } from "./tasks/ModalWindow";
import { Window } from "./tasks/Window";

export class Main {
  public static main(): void {
    const window = new Window();
    window.closeWindow();
    console.log("====================================");
    const modalWindow = new ModalWindow();
    modalWindow.closeWindow();
  }
}

Main.main();
