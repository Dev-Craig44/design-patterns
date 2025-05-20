"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(character) {
        this.currentCharacter = character;
    }
    setCharacter(character) {
        this.currentCharacter = character;
    }
    x() {
        this.currentCharacter.x();
    }
    y() {
        this.currentCharacter.y();
    }
    a() {
        this.currentCharacter.a();
    }
    b() {
        this.currentCharacter.b();
    }
}
exports.Game = Game;
