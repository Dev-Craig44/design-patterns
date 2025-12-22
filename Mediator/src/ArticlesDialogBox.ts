import { Button } from "./Button";
import { DialogBox } from "./DialogBox";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";

export class ArticlesDialogBox extends DialogBox {
  private articlesListBox: ListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);

  public simulateUserInteraction() {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.titleTextBox.setContent("New Article Title");
    console.log("TextBox: " + this.titleTextBox.getContent());
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
