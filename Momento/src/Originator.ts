import { Momento } from "./Momento";

export default class Originator {
  private state: string;

  constructor() {
    this.state = "";
  }

  getState = (): string => {
    return this.state;
  };

  setState(state: string): void {
    console.log(`Saved state to: ${state}`);
    this.state = state;
  }

  setStateToMomento(): Momento {
    console.log(`Originator: Made Momento...`);
    return new Momento(this.state);
  }

  restoreStateFromMomento(momento: Momento): void {
    this.state = momento.getState();
    console.log(`Originator: State saved to: ${this.state}`);
  }
}
