import Services from "./TravelModes";
export default class Bicycling implements Services {
  getETA(): void {
    console.log(`Calculating ETA (Bicycling)`);
  }
  getDirections(): void {
    console.log(`Calulating Direction (Bicycling)`);
  }
}
