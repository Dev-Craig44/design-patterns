import { Character } from "./Character";

export class Game {
  private currentCharacter: Character;

  constructor(character: Character) {
    this.currentCharacter = character;
  }

  setCharacter(character: Character) {
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
