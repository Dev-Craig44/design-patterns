import Editor from "./Editor";
import History from "./History";

const editor = new Editor();
const history = new History();

editor.setState("a");
history.push(editor.createState());

editor.setState("b");
history.push(editor.createState());

editor.setState("c");
editor.restore(history.pop());
editor.restore(history.pop());

console.log(`Current state after restoring is: ${editor.getState()}`);
