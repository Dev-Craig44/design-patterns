import { History } from "./History";
import { HtmlDocument } from "./HtmlDocument";
import { UndoableAction } from "./UndoableAction";

export class BoldCommand implements UndoableAction {
  private previousContent: string = "";
  private document: HtmlDocument;
  private history: History;

  constructor(document: HtmlDocument, history: History) {
    this.document = document;
    this.history = history;
  }

  undo(): void {
    this.document.setContent(this.previousContent);
  }

  execute(): void {
    this.previousContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }
}
