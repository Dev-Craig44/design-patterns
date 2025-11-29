import { BoldCommand } from "./editor/BoldCommand";
import { History } from "./editor/History";
import { HtmlDocument } from "./editor/HtmlDocument";
import { UndoAction } from "./editor/UndoAction";

class main {
  main(): void {
    const history = new History();
    const document = new HtmlDocument();
    document.setContent("Hello, World!");
    const boldCommand = new BoldCommand(document, history);
    boldCommand.execute();
    console.log(document.getContent());

    const undoAction = new UndoAction(history);
    undoAction.execute();
    console.log(document.getContent());
  }
}

const app = new main();
app.main();
