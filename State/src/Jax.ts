import { Character } from "./Character";

export class Jax implements Character {
  x(): void {
    console.log("Power Punch.");
  }
  y(): void {
    console.log("Uppercut.");
  }
  a(): void {
    console.log("Low Kick.");
  }
  b(): void {
    console.log("Roundhouse Kick.");
  }
}
