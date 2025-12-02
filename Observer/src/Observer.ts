export interface Observer {
  // 1.) Each concrete observer such get the data it needs, so we should remove the parameter
  update(): void;
}
