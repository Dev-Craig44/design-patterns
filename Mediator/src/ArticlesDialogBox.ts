import { Button } from "./Button";
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

  constructor() {
    this.articlesListBox.addEventHandler({
      handle: () => {
        this.articleSelected();
      },
    });

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
