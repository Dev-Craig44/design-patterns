import { Button } from "./Button";
// 15.) We don't need the dialogbox anymore
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";

export class ArticlesDialogBox {
  private articlesListBox: ListBox = new ListBox();
  private titleTextBox = new TextBox();
  private saveButton = new Button();

  public simulateUserInteraction() {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.titleTextBox.setContent("New Article Title");
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.saveButton.getIsEnabled());
  }

  // 16.) We don't need the changed method anymore because we're not going to have a central place for handling all the changes.
  // 17.) Create a constructor to set up the observers.
  constructor() {
    // 18.) Tell each of the UI controls that this dialog box is interested in their changes.
    // We should pass an object that implements the Observer interface. But we can use a shortcut by passing new anonymous classes that implement the update method.
    this.articlesListBox.addEventHandler({
      handle: () => {
        this.articleSelected();
      },
    });

    // 19.) Do the same for the titleTextBox.
    this.titleTextBox.addEventHandler({
      handle: () => {
        this.titleChanged();
      },
    });
  }
  private articleSelected() {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setIsEnabled(true);
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty =
      content === null || content.trim() === "" || content.length === 0;
    this.saveButton.setIsEnabled(!isEmpty);
  }
}
