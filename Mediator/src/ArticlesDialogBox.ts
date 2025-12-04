import { Button } from "./Button";
import { DialogBox } from "./DialogBox";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";

export class ArticlesDialogBox extends DialogBox {
  private articlesListBox: ListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);

  //   2.) Simulate user interactions in the constructor of ArticlesDialogBox.
  public simulateUserInteraction() {
    // 3.) Simulate the user selecting an article in the ListBox.
    this.articlesListBox.setSelection("Article 1");
    // 7.) Simulate the user clearing the TextBox.
    this.titleTextBox.setContent("");
    // 8.) Simulate the user entering a new title in the TextBox.
    this.titleTextBox.setContent("New Article Title");
    // 4.) Display the state of the TextBox
    console.log("TextBox: " + this.titleTextBox.getContent());
    // 5.) See if the Save button is enabled or not.
    console.log("Button: " + this.saveButton.getIsEnabled());
  }

  changed(control: Button | ListBox | TextBox): void {
    if (control === this.articlesListBox) this.articleSelected();
    else if (control === this.titleTextBox) this.titleChanged();
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
