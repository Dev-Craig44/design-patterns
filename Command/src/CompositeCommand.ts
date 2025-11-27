import { Command } from "./fx/Command";

// 5.) create the CompositeCommand class that implements Command interface
export class CompositeCommand implements Command {
  // 6.) add a private field to hold an array of Command objects
  private _commands: Command[];

  // 7.) create a constructor that accepts an array of Command objects
  constructor(commands: Command[]) {
    this._commands = commands;
  }

  //   8.) add an add method to add a Command to the array
  add(command: Command): void {
    this._commands.push(command);
  }

  //   9.) iterate over the array of Command objects and call their execute methods
  execute(): void {
    console.log("Executing a series of commands.");
    for (const command of this._commands) {
      command.execute();
    }
  }
}
