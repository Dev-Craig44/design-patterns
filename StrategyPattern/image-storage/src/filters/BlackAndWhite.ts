import { Filter } from "src/interfaces/Filter";

export class BlackAndWhite implements Filter {
  apply(fileName: String): void {
    console.log(`Applying B&W filter to ${fileName}`);
  }
}
