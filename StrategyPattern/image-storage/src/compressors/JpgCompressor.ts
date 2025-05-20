import { Compressor } from "src/interfaces/Compressor";

export class JpgCompressor implements Compressor {
  compress(fileName: String): void {
    console.log(`Compressing ${fileName} using JPG`);
  }
}
