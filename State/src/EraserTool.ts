import { Tool } from "./Tool";

export class EraserTool implements Tool {
  mouseDown(): void {
    console.log("Eraser icon");
  }
  mouseUp(): void {
    console.log("Erase something");
  }
}
