import { UndoableAction } from "./UndoableAction";

export class History {
  private actions: UndoableAction[] = [];

  push(action: UndoableAction): void {
    this.actions.push(action);
  }

  pop(): UndoableAction | undefined {
    return this.actions.pop();
  }
}
