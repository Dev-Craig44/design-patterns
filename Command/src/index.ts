import { BoldCommand } from "./editor/BoldCommand";
import { History } from "./editor/History";
import { HtmlDocument } from "./editor/HtmlDocument";
import { UndoAction } from "./editor/UndoAction";

class main {
  main(): void {
    // 9,) create a history instance
    const history = new History();
    // 10.) create an HtmlDocument instance
    const document = new HtmlDocument();
    // 11.) set initial content
    document.setContent("Hello, World!");
    // 12.) create a BoldCommand instance
    const boldCommand = new BoldCommand(document, history);
    // 13.) execute the bold command
    boldCommand.execute();
    // 14.) log the content after making it bold
    console.log(document.getContent());

    // 15.) undo the bold command
    // boldCommand.undo();
    // 16.) log the content after undoing the bold command
    // console.log(document.getContent());
    // Instead of directly calling undo on boldCommand, we should create an UndoCommand that takes history as a parameter and calls undo on the last command in history.
    // 20.) create an UndoCommand class that takes history as a parameter and calls undo on the last command in history.
    const undoAction = new UndoAction(history);
    // 21.) execute the undo action
    undoAction.execute();
    // 22.) log the content after executing the undo action
    console.log(document.getContent());
  }
}

const app = new main();
app.main();
