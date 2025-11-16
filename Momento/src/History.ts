import { EditorState } from "./EditorState";

export default class History {
  private states: EditorState[] = [];

  push(state: EditorState): void {
    this.states.push(state);
  }

  pop(): EditorState {
    let lastIndex = this.states.length - 1;
    let lastState = this.states[lastIndex];
    this.states.pop();
    return lastState;
  }
}
