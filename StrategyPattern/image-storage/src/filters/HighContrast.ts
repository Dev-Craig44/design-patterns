import { Filter } from "src/interfaces/Filter";

export class HighContrast implements Filter {
  apply(fileName: String): void {
    console.log(`Applying high contrast filter to ${fileName}`);
  }
}
