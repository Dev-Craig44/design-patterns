"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIterator = void 0;
class ArrayIterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.items.length;
    }
    next() {
        return this.items[this.index++];
    }
    current() {
        return this.items[this.index];
    }
}
exports.ArrayIterator = ArrayIterator;
