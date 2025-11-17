import { Tool } from "./Tool";

export class Canvas {
  // 1.) Change ToolType to Tool because we are storing Tool instances
  private _currentTool: Tool;

  constructor(currentTool: Tool) {
    this._currentTool = currentTool;
  }

  public get currentTool(): Tool {
    return this._currentTool;
  }
  public set currentTool(value: Tool) {
    this._currentTool = value;
  }

  //   2.) Add mouseDown and mouseUp methods that delegate to the current tool
  mouseDown(): void {
    this._currentTool.mouseDown();
  }
  mouseUp(): void {
    this._currentTool.mouseUp();
  }
}
