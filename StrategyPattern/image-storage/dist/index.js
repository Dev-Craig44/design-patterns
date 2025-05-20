"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BlackAndWhite_1 = require("./filters/BlackAndWhite");
const PngCompressor_1 = require("./compressors/PngCompressor");
const ImageStorage_1 = require("./ImageStorage");
const JpgCompressor_1 = require("./compressors/JpgCompressor");
class main {
    main() {
        const imageStorage = new ImageStorage_1.ImageStorage();
        imageStorage.store("MyNudePhoto", new PngCompressor_1.PngCompressor(), new BlackAndWhite_1.BlackAndWhite());
        imageStorage.store("MyNudePhoto", new JpgCompressor_1.JpgCompressor(), new BlackAndWhite_1.BlackAndWhite());
    }
}
new main().main();
