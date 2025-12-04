import { Button } from "./Button";
import { DialogBox } from "./DialogBox";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";

// 9.) Finally, implement the ArticlesDialogBox concrete mediator class that derives from the DialogBox abstract class.
export class ArticlesDialogBox extends DialogBox {
  // 10.) Add references to the ListBox, TextBox, and Button colleague classes.
  private articlesListBox: ListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);

  //   11.) Implement the changed() method to handle the various colleague classes.
  changed(control: Button | ListBox | TextBox): void {
    if (control === this.articlesListBox) this.articleSelected();
    else if (control === this.titleTextBox) this.titleChanged();
  }

  //   14.) Create a articleSelected() method to simulate the selection of an article in the articlesListBox.
  private articleSelected() {
    // 12.) Populate the titleTextBox when the selection in the articlesListBox changes.
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    // 13.) Enable the saveButton when an article is selected in the articlesListBox.
    this.saveButton.setIsEnabled(true);
  }

  //   15.) Create a titleChanged() method to simulate changing the title in the titleTextBox.
  private titleChanged() {
    // 16.) declare content variable to use the titleTextBox content.
    const content = this.titleTextBox.getContent();
    // 17.) declare a isEmpty variable to check if the content is empty.
    const isEmpty =
      content === null || content.trim() === "" || content.length === 0;
    // 18.) Enable or disable the saveButton when the title in the titleTextBox changes.
    this.saveButton.setIsEnabled(!isEmpty);
  }
}
