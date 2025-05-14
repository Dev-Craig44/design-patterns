import Originator from "./Originator";
import Caretaker from "./Caretaker";

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("Hello");
caretaker.add(originator.setStateToMomento());

originator.setState("World");
caretaker.add(originator.setStateToMomento());

originator.setState("!!!!");
caretaker.add(originator.setStateToMomento());

originator.restoreStateFromMomento(caretaker.get(0));

console.log(`Current state after restoring is: ${originator.getState()}`);
