import { ToolType } from "./ToolType";

// 1.) Create Canvas class
class Canvas {
  // 3.) Make a field to hold the current tool
  private _currentTool: ToolType;
  //   4.) Create getter and setter for current tool
  public get currentTool(): ToolType {
    return this._currentTool;
  }
  public set currentTool(value: ToolType) {
    this._currentTool = value;
  }

  constructor(currentTool: ToolType) {
    this._currentTool = currentTool;
  }

  //   2.) Add mouseDown and mouseUp methods
  mouseDown(): void {
    // 5.) Use the current tool to determine the icon to display
    if (this._currentTool === ToolType.Selection) {
      console.log("Selection icon");
    } else if (this._currentTool === ToolType.Brush) {
      console.log("Brush icon");
    } else if (this._currentTool === ToolType.Eraser) {
      console.log("Eraser icon");
    }
  }

  mouseUp(): void {
    // 6.) copy and paste the same code from mouseDown
    if (this._currentTool === ToolType.Selection) {
      console.log("Draw dashed rectangle");
    } else if (this._currentTool === ToolType.Brush) {
      console.log("Draw a line");
    } else if (this._currentTool === ToolType.Eraser) {
      console.log("Erase something");
    }
  }
}
