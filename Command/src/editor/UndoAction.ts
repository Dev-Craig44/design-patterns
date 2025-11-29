import { Action } from "./Action";
import { History } from "./History";

export class UndoAction implements Action {
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  execute(): void {
    this.history.pop()?.undo();
  }
}
