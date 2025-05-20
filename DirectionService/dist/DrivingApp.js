"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DrivingApp {
    constructor(mode) {
        this.currentMode = mode;
    }
    setMode(mode) {
        this.currentMode = mode;
    }
    getETA() {
        return this.currentMode.getETA();
    }
    getDirections() {
        return this.currentMode.getDirections();
    }
}
exports.default = DrivingApp;
