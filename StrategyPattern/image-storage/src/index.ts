import { BlackAndWhite } from "./filters/BlackAndWhite";
import { PngCompressor } from "./compressors/PngCompressor";
import { ImageStorage } from "./ImageStorage";
import { JpgCompressor } from "./compressors/JpgCompressor";

class main {
  main() {
    const imageStorage = new ImageStorage();

    imageStorage.store("MyNudePhoto", new PngCompressor(), new BlackAndWhite());
    imageStorage.store("MyNudePhoto", new JpgCompressor(), new BlackAndWhite());
  }
}

new main().main();
