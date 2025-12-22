import { ArticlesDialogBox } from "./ArticlesDialogBox";

class Main {
  public static main(): void {
    const dialogBox = new ArticlesDialogBox();
    dialogBox.simulateUserInteraction();
  }
}

Main.main();
