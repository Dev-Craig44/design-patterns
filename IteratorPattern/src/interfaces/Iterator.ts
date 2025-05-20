export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
  current(): T;
}
