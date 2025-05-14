"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Momento = void 0;
class Momento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
exports.Momento = Momento;
