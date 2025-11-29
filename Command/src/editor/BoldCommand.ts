import { History } from "./History";
import { HtmlDocument } from "./HtmlDocument";
import { UndoableAction } from "./UndoableAction";

// 1.) create bold command class that implements UndoableAction
export class BoldCommand implements UndoableAction {
  private previousContent: string = "";
  // 2.) add a reference to HtmlDocument because in this command will are delegating the work to HtmlDocument
  private document: HtmlDocument;
  // 3.) add a history property to store previous content for undo operation
  private history: History;

  // 4.) add a constructor that initializes document and history properties
  constructor(document: HtmlDocument, history: History) {
    this.document = document;
    this.history = history;
  }

  undo(): void {
    // 8.) restore the previous content on undo
    this.document.setContent(this.previousContent);
  }
  execute(): void {
    // 5.) store the current content before making it bold
    this.previousContent = this.document.getContent();
    // 6.) delegate the bold operation to HtmlDocument
    this.document.makeBold();
    // 7.) push the previous content to history for undo operation
    this.history.push(this);
  }
}
