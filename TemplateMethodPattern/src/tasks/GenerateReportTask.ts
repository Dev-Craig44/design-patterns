import { AuditTrail } from "./AuditTrail";

export class GenerateReportTask {
  // just like before, we give it a |autoTrail| class
  private auditTrail: AuditTrail;

  // initialize it using a constructor
  constructor() {
    this.auditTrail = new AuditTrail();
  }

  // now let's add the { execute } method
  execute(): void {
    // call the [auditTrail] {record} method
    this.auditTrail.record();

    // this would be the logic for generating a report
    console.log("Generate report");
  }
}
