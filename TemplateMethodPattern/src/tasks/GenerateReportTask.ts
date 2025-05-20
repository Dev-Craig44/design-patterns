import { AuditTrail } from "./AuditTrail";

export class GenerateReportTask {
  private auditTrail: AuditTrail;

  constructor() {
    this.auditTrail = new AuditTrail();
  }

  execute(): void {
    this.auditTrail.record();
    console.log("Generate report");
  }
}
