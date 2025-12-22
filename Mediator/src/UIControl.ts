import { EventHandler } from "./Observer";
// 9.) Make this an abstract class because it doesn't make any sense to create a new nstance of the UIControl. We should only work with concrete subclasses of UIControl like Button, TextBox, etc.
export abstract class UIControl {
  // 1.) Remove the concept of "owner" from UIControl. Because we no longer need to maintain a direct reference to the dialog box. They're going to talk to a dialog box indirectly via the observer pattern.

  // 4.) Maintain a list of observers (in this case, just one mediator).
  private eventHandlers: EventHandler[] = [];

  // 5.) Provide method to add observers.
  // 20.) Rename the method to addEventHandler to better reflect its purpose.
  public addEventHandler(observer: EventHandler): void {
    // 6.) Add the observer to the list.
    this.eventHandlers.push(observer);
  }

  // 7.) Provide method to notify observers of changes.
  // 12.) Make this method protected instead of public to restrict access to subclasses only.
  // 23.) Rename the method to notifyEventHandlers to better reflect its purpose.
  protected notifyEventHandlers(): void {
    // 8.) Loop through all observers and call their update method.
    for (const eventHandler of this.eventHandlers) {
      eventHandler.handle();
    }
  }
}
