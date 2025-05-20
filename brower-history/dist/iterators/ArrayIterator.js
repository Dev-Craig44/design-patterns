"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIterator = void 0;
class ArrayIterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    next() {
        if (this.hasNext()) {
            return this.items[this.index++];
        }
        return null;
    }
    hasNext() {
        return this.index < this.items.length;
    }
    current() {
        return this.items[this.index];
    }
}
exports.ArrayIterator = ArrayIterator;
//# sourceMappingURL=ArrayIterator.js.map