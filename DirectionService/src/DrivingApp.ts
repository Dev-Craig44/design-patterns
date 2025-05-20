import Service from "./TravelModes";
export default class DrivingApp {
  private currentMode: Service;

  constructor(mode: Service) {
    this.currentMode = mode;
  }

  setMode(mode: Service): void {
    this.currentMode = mode;
  }

  getETA(): void {
    return this.currentMode.getETA();
  }

  getDirections(): void {
    return this.currentMode.getDirections();
  }
}
