export class HtmlDocument {
  private content: string;

  constructor() {
    this.content = "";
  }

  getContent(): string {
    return this.content;
  }

  setContent(newContent: string): void {
    this.content = newContent;
  }

  makeBold(): void {
    this.content = `<b>${this.content}</b>`;
  }
}
