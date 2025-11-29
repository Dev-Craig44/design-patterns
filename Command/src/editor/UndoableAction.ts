import { Action } from "./Action";

export interface UndoableAction extends Action {
  undo(): void;
}
