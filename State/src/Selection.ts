import { Tool } from "./Tool";

export class SelectionTool implements Tool {
  constructor() {}

  mouseDown(): void {
    console.log("Selection icon");
  }
  mouseUp(): void {
    console.log("Draw dashed rectangle");
  }
}
