import { BlackAndWhiteCommand } from "./BlackAndWhiteCommand";
import { CompositeCommand } from "./CompositeCommand";
import { ResizeCommand } from "./ResizeCommand";

class main {
  main(): void {
    // 10.) create a new comspite command
    const composite = new CompositeCommand([]);

    // 11.) add commands to the composite command
    composite.add(new ResizeCommand());
    composite.add(new BlackAndWhiteCommand());
    composite.execute();
  }
}

const app = new main();
app.main();
