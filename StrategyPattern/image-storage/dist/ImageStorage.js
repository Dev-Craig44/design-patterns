"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStorage = void 0;
class ImageStorage {
    store(fileName, compressor, filter) {
        compressor.compress(fileName);
        filter.apply(fileName);
    }
}
exports.ImageStorage = ImageStorage;
