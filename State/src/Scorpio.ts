import { Character } from "./Character";

export class Scorpio implements Character {
  x(): void {
    console.log(`Swift Jab.`);
  }
  y(): void {
    console.log(`Fire Punch`);
  }
  a(): void {
    console.log(`Sweep Kick`);
  }
  b(): void {
    console.log(`Axle Kick`);
  }
}
