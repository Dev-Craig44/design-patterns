import DrivingApp from "./DrivingApp";
import Bicycling from "./Bicycling";
import Driving from "./Driving";
import Transit from "./Transit";

const drivingApp = new DrivingApp(new Driving());

drivingApp.getDirections();

drivingApp.setMode(new Transit());

drivingApp.getETA();

drivingApp.setMode(new Bicycling());

drivingApp.getETA();
drivingApp.getDirections();
