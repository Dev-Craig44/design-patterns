export class VideoEditorState {
  private contrast: number;
  private text: string;

  constructor(contrast: number, text: string) {
    this.contrast = contrast;
    this.text = text;
  }

  public getContrast(): number {
    return this.contrast;
  }

  public getText(): string {
    return this.text;
  }
}
