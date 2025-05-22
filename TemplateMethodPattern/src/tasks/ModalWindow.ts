import { WindowBase } from "./WindowBase";

export class ModalWindow extends WindowBase {
  protected beforeClose(): void {
    console.log("Saving modal state before closing...");
    // Add logic to save state, prompt user, etc.
  }
  protected afterClose(): void {
    console.log("Modal closed. Cleaning up resources...");
    // Add logic to clean up resources, notify user, etc
  }
}
