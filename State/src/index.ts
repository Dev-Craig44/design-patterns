import { Canvas } from "./Canvas";
import { EraserTool } from "./EraserTool";

class main {
  constructor() {}

  main(): void {
    let canvas = new Canvas(new EraserTool());
    canvas.mouseDown();
    canvas.mouseUp();
  }
}

const app = new main();
app.main();
