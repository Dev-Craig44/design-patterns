import { AuditTrail } from "./AuditTrail";

// PROBLEMS
// there is a lot of duplicate code in the |TransferMoneyTask| and |GenerateReportTask| classes

export class GenerateReportTask {
  // just like before, we give it a |autoTrail| class
  // this [auditTrail] creation and initialization is a duplicate code
  // nobody is forcing us to do this, what if tomorrow I joined this company as a new software engineer can I want to create a new task without following this structure?
  // my task class is not going to record the current task
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
