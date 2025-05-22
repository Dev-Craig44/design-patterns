"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferMoneyTask = void 0;
const Task_1 = require("./Task");
// use the `extends` keyword to inherit from the Task class
// hover the class name and press `ctrl + .` to auto import the implementation of the |Task| class
class TransferMoneyTask extends Task_1.Task {
    // because we have the an implementation of the constructor in our base class we don't need to implement it here
    // constructor(auditTrail: AuditTrail) {
    // we need to call the constructor of the parent class
    // we do this using the super() method
    // this will call the constructor of the parent class
    // super(auditTrail);
    // }
    // we no longer need this execute method because we ipmlemented once in our base class
    // also change the modifier to protected
    doExecute() {
        console.log("Transfer money");
        // this is where we would implement the logic for transferring money
    }
}
exports.TransferMoneyTask = TransferMoneyTask;
//# sourceMappingURL=TransferMoneyTask.js.map