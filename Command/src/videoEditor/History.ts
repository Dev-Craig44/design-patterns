import { VideoEditorState } from "./VideoEditorState";

export class History {
  private states: VideoEditorState[] = [];

  public push(state: VideoEditorState): void {
    this.states.push(state);
  }

  public pop(): VideoEditorState | undefined {
    return this.states.pop();
  }
}
