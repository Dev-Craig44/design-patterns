import { IIterator } from "../interfaces/Iterator";

export class ArrayIterator<T> implements IIterator<T> {
  private index: number = 0;

  constructor(private items: T[]) {}

  next(): T | null {
    if (this.hasNext()) {
      return this.items[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  current(): T {
    return this.items[this.index];
  }
}
