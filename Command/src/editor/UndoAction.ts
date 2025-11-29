import { Action } from "./Action";
import { History } from "./History";

// 17.) create UndoAction class that implements Action
export class UndoAction implements Action {
  // 18.) add a reference to History to perform undo operation
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  execute(): void {
    // 19.) pop the last action from history, declare a variable to hold
    this.history.pop()?.undo();
  }
}
