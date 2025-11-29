// 1.) create html document class
export class HtmlDocument {
  // 2.) add content property and constructor
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  // 3.) add getContent and setContent methods
  getContent(): string {
    return this.content;
  }

  setContent(newContent: string): void {
    this.content = newContent;
  }

  // 4.) add makeBold method
  makeBold(): void {
    this.content = `<b>${this.content}</b>`;
  }
}
