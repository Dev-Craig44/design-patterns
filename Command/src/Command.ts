// 1.) Create a Command interface so that different commands can implement it
export interface Command {
  execute(): void;
}
