"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowBase = void 0;
class WindowBase {
    closeWindow() {
        this.beforeClose();
        this.close();
        this.afterClose();
    }
    close() {
        console.log("Removing the window from the screen");
    }
}
exports.WindowBase = WindowBase;
//# sourceMappingURL=WindowBase.js.map