import { ArticlesDialogBox } from "./ArticlesDialogBox";

class Main {
  public static main(): void {
    // 1.) Create an instance of ArticlesDialogBox.
    const dialogBox = new ArticlesDialogBox();
    // 6.) Call the simulateUserInteraction() method to see how the mediator coordinates the interaction between the UI controls.
    dialogBox.simulateUserInteraction();
  }
}

Main.main();
