"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const AuditTrail_1 = require("./AuditTrail");
// because we have a abstract class in here we need to mark this class as abstract
class Task {
    // initialize it using a constructor
    // having a constructor with this parameter would be useful if we were dealing with an interface
    constructor(auditTrail) {
        this.auditTrail = new AuditTrail_1.AuditTrail();
    }
    execute() {
        // this is where we would define the template for executing our tasks
        // so this is where we would call our |auditTrail|
        this.auditTrail.record();
        // now what happens after this will depend on our subclasses
        // so we will call the {doExecute} abstract method here
        this.doExecute();
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map