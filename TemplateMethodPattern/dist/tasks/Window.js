"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
const WindowBase_1 = require("./WindowBase");
class Window extends WindowBase_1.WindowBase {
    beforeClose() {
        console.log("Saving window state before closing...");
        // Add logic to save state, prompt user, etc.
    }
    afterClose() {
        console.log("Window closed. Cleaning up resources...");
        // Add logic to clean up resources, notify user, etc.
    }
}
exports.Window = Window;
//# sourceMappingURL=Window.js.map