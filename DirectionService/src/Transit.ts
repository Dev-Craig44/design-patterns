import Services from "./TravelModes";
export default class Transit implements Services {
  getETA(): void {
    console.log(`Calculating ETA (Transit)`);
  }
  getDirections(): void {
    console.log(`Calulating Direction (Transit)`);
  }
}
