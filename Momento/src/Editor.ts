import { EditorState } from "./EditorState";

export default class Editor {
  private content: string;

  constructor() {
    this.content = "";
  }

  getState(): string {
    return this.content;
  }

  setState(content: string): void {
    console.log(`Saved state to: ${content}`);
    this.content = content;
  }

  createState(): EditorState {
    console.log(`Editor: Made EditorState...`);
    return new EditorState(this.content);
  }

  restore(state: EditorState): void {
    this.content = state.getContent();
    console.log(`Editor: State saved to: ${this.content}`);
  }
}
