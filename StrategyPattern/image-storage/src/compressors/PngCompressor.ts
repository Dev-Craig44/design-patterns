import { Compressor } from "src/interfaces/Compressor";

export class PngCompressor implements Compressor {
  compress(fileName: String): void {
    console.log(`Compressing ${fileName} using PNG`);
  }
}
