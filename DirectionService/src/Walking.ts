import Services from "./TravelModes";
export default class Walking implements Services {
  getETA(): void {
    console.log(`Calculating ETA (Walking)`);
  }
  getDirections(): void {
    console.log(`Calulating Direction (Walking)`);
  }
}

function myFunction(a, b) {
  const results = [...a].reduce((acc, cur) => {
    if (b.has(cur)) {
      acc.add(cur);
    }
    return acc;
  }, new Set());

  return results;
}
