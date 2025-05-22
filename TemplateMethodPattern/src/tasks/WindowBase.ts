export abstract class WindowBase {
  closeWindow() {
    this.beforeClose();
    this.close();
    this.afterClose();
  }

  protected abstract beforeClose(): void;
  protected abstract afterClose(): void;

  private close(): void {
    console.log("Removing the window from the screen");
  }
}
