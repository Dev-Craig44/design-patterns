import { Command } from "./Command";

export class Button {
  private _label: string;
  private _command: Command;

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
    this._command.execute();
  }
}
