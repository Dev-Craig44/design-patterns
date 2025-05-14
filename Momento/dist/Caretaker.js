"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Caretaker {
    constructor() {
        this.momentoList = [];
    }
    add(momento) {
        this.momentoList.push(momento);
    }
    get(index) {
        return this.momentoList[index];
    }
}
exports.default = Caretaker;
