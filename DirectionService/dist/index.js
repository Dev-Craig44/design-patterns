"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DrivingApp_1 = __importDefault(require("./DrivingApp"));
const Bicycling_1 = __importDefault(require("./Bicycling"));
const Driving_1 = __importDefault(require("./Driving"));
const Transit_1 = __importDefault(require("./Transit"));
const drivingApp = new DrivingApp_1.default(new Driving_1.default());
drivingApp.getDirections();
drivingApp.setMode(new Transit_1.default());
drivingApp.getETA();
drivingApp.setMode(new Bicycling_1.default());
drivingApp.getETA();
drivingApp.getDirections();
