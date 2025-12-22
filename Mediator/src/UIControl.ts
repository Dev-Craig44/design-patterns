import { EventHandler } from "./Observer";
export abstract class UIControl {
  private eventHandlers: EventHandler[] = [];

  public addEventHandler(observer: EventHandler): void {
    this.eventHandlers.push(observer);
  }

  protected notifyEventHandlers(): void {
    for (const eventHandler of this.eventHandlers) {
      eventHandler.handle();
    }
  }
}
