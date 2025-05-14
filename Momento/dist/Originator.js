"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Momento_1 = require("./Momento");
class Originator {
    constructor() {
        this.getState = () => {
            return this.state;
        };
        this.state = "";
    }
    setState(state) {
        console.log(`Saved state to: ${state}`);
        this.state = state;
    }
    setStateToMomento() {
        console.log(`Originator: Made Momento...`);
        return new Momento_1.Momento(this.state);
    }
    restoreStateFromMomento(momento) {
        this.state = momento.getState();
        console.log(`Originator: State saved to: ${this.state}`);
    }
}
exports.default = Originator;
