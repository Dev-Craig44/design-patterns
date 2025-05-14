"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Originator_1 = __importDefault(require("./Originator"));
const Caretaker_1 = __importDefault(require("./Caretaker"));
const originator = new Originator_1.default();
const caretaker = new Caretaker_1.default();
originator.setState("Hello");
caretaker.add(originator.setStateToMomento());
originator.setState("World");
caretaker.add(originator.setStateToMomento());
originator.setState("!!!!");
caretaker.add(originator.setStateToMomento());
originator.restoreStateFromMomento(caretaker.get(0));
console.log(`Current state after restoring is: ${originator.getState()}`);
