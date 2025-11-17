import { ToolType } from "./ToolType";

class Canvas {
  private _currentTool: ToolType;

  public get currentTool(): ToolType {
    return this._currentTool;
  }
  public set currentTool(value: ToolType) {
    this._currentTool = value;
  }

  constructor(currentTool: ToolType) {
    this._currentTool = currentTool;
  }

  mouseDown(): void {
    if (this._currentTool === ToolType.Selection) {
      console.log("Selection icon");
    } else if (this._currentTool === ToolType.Brush) {
      console.log("Brush icon");
    } else if (this._currentTool === ToolType.Eraser) {
      console.log("Eraser icon");
    }
  }

  mouseUp(): void {
    if (this._currentTool === ToolType.Selection) {
      console.log("Draw dashed rectangle");
    } else if (this._currentTool === ToolType.Brush) {
      console.log("Draw a line");
    } else if (this._currentTool === ToolType.Eraser) {
      console.log("Erase something");
    }
  }
}
