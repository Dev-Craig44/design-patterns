// 2.) import the Command interface
import { Command } from "./Command";

class Button {
  private _label: string;
  // 3.) Add a Command property to the Button class
  private _command: Command;

  // 4.) Update the constructor to accept a Command parameter
  constructor(label: string, command: Command) {
    this._label = label;
    this._command = command;
  }

  public get label(): string {
    return this._label;
  }
  public set label(value: string) {
    this._label = value;
  }

  public click(): void {
    // 5.) Call the execute method of the Command property so that the command is executed when the button is clicked
    this._command.execute();
  }
}
