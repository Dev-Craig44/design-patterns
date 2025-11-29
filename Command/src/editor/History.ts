import { UndoableAction } from "./UndoableAction";

// 8.) create history class
export class History {
  // 9.) add actions list property
  private actions: UndoableAction[] = [];

  // 10.) add push method
  push(action: UndoableAction): void {
    this.actions.push(action);
  }

  // 11.) add pop method
  pop(): UndoableAction | undefined {
    return this.actions.pop();
  }
}
