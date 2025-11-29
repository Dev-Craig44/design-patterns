import { Action } from "./Action";

// 6.) create undoable action interface that extends action interface
export interface UndoableAction extends Action {
  // 7.) add undo method
  undo(): void;
}
