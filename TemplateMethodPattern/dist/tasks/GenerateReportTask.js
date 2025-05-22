"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateReportTask = void 0;
const AuditTrail_1 = require("./AuditTrail");
class GenerateReportTask {
    constructor() {
        this.auditTrail = new AuditTrail_1.AuditTrail();
    }
    execute() {
        this.auditTrail.record();
        console.log("Generate report");
    }
}
exports.GenerateReportTask = GenerateReportTask;
//# sourceMappingURL=GenerateReportTask.js.map