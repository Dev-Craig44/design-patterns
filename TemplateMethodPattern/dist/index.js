"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const AuditTrail_1 = require("./tasks/AuditTrail");
const TransferMoneyTask_1 = require("./tasks/TransferMoneyTask");
class Main {
    static main() {
        const task = new TransferMoneyTask_1.TransferMoneyTask(new AuditTrail_1.AuditTrail());
        // the problem with this implementation is that we we can skip recording information in the audit trail by calling the execute method directly
        // now we get a compilation error because this method is now not accessible outside of our Task class
        task.execute();
        // this is completely against the idea of implementing this execute method in the base class
    }
}
exports.Main = Main;
Main.main();
//# sourceMappingURL=index.js.map