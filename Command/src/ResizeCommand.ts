import { Command } from "./fx/Command";

// 1.) create ResizeCommand class that implements Command interface
export class ResizeCommand implements Command {
  // 2.) implement the execute method
  execute(): void {
    // 3.) add logic to resize an item
    console.log("Resizing the item.");
  }
}
