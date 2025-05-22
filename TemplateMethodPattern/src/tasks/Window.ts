import { WindowBase } from "./WindowBase";

export class Window extends WindowBase {
  protected beforeClose(): void {
    console.log("Saving window state before closing...");
    // Add logic to save state, prompt user, etc.
  }
  protected afterClose(): void {
    console.log("Window closed. Cleaning up resources...");
    // Add logic to clean up resources, notify user, etc.
  }
}
