export interface Observer {
  // 1.) Introduce the value parameter
  update(value: number): void;
}
