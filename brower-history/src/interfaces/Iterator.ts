export interface IIterator<T> {
  next(): T | null;
  hasNext(): boolean;
  current(): T;
}
