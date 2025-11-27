import { Command } from "./fx/Command";

// 4.) create the BlackAndWhiteCommand class that i mplements Command interface
export class BlackAndWhiteCommand implements Command {
  execute(): void {
    console.log("Converting the item to black and white.");
  }
}
