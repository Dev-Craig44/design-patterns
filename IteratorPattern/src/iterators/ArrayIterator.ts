import { Iterator } from "../interfaces/Iterator";

export class ArrayIterator<T> implements Iterator<T> {
  private index: number = 0;

  constructor(private items: T[]) {}

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): T {
    return this.items[this.index++];
  }

  current(): T {
    return this.items[this.index];
  }
}
