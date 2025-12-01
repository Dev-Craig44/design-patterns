// import history and editor
import { History } from "./videoEditor/History";
import { VideoEditor } from "./videoEditor/videoEditor";
class main {
  main(): void {
    const videoEditor = new VideoEditor();
    const history = new History();

    // Initial state
    console.log(videoEditor.toString());

    // Set text and save state
    history.push(videoEditor.createState());
    videoEditor.setText("Hello, World!");
    console.log(videoEditor.toString());

    // Change contrast and save state
    history.push(videoEditor.createState());
    videoEditor.setContrast(0.8);
    console.log(videoEditor.toString());

    // Remove text and save state
    history.push(videoEditor.createState());
    videoEditor.removeText();
    console.log(videoEditor.toString());

    // Undo last change
    let prevState = history.pop();
    if (prevState) {
      videoEditor.restore(prevState);
      console.log("After undo:");
      console.log(videoEditor.toString());
    }

    // Undo another change
    prevState = history.pop();
    if (prevState) {
      videoEditor.restore(prevState);
      console.log("After another undo:");
      console.log(videoEditor.toString());
    }
  }
}

const app = new main();
app.main();
