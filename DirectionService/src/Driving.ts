import Services from "./TravelModes";
export default class Driving implements Services {
  getETA(): void {
    console.log(`Calculating ETA (Driving)`);
  }
  getDirections(): void {
    console.log(`Calulating Direction (Driving)`);
  }
}
