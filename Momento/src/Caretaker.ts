import { Momento } from "./Momento";

export default class Caretaker {
  private momentoList: Momento[] = [];

  add(momento: Momento): void {
    this.momentoList.push(momento);
  }

  get(index: number): Momento {
    return this.momentoList[index];
  }
}
