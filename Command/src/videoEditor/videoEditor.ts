import { VideoEditorState } from "./VideoEditorState";

export class VideoEditor {
  private contrast: number = 0.5;
  private text: string = "";

  public createState(): VideoEditorState {
    return new VideoEditorState(this.contrast, this.text);
  }

  public restore(state: VideoEditorState): void {
    this.contrast = state.getContrast();
    this.text = state.getText();
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public removeText(): void {
    this.text = "";
  }

  public getContrast(): number {
    return this.contrast;
  }

  public setContrast(contrast: number): void {
    this.contrast = contrast;
  }

  public toString(): string {
    return `VideoEditor{contrast=${this.contrast}, text='${this.text}'}`;
  }
}
