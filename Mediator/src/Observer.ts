// 2.) Create an Observer class that will be used by the Mediator (DialogBox) and Colleagues (UIControls) to communicate indirectly.
// This would be considered a functional interface because it has only one method.
// 21.) Change the name to EventHandler to better reflect its purpose.
export interface EventHandler {
  // 3.) Give it a method to notify changes.
  //   22.) Rename the method to handle to better reflect its purpose.
  handle(): void;
}
