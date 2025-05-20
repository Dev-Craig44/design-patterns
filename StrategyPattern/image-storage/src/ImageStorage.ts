import { Compressor } from "./interfaces/Compressor";
import { Filter } from "./interfaces/Filter";

export class ImageStorage {
  store(fileName: string, compressor: Compressor, filter: Filter): void {
    compressor.compress(fileName);
    filter.apply(fileName);
  }
}
