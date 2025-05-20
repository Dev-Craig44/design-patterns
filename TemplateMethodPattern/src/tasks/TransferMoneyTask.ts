import { AuditTrail } from "./AuditTrail";

export class TransferMoneyTask {
  // create private [auditTrail] property with |AuditTrail| class that came from the AuditTrail file
  private auditTrail: AuditTrail;
  // create a constructor that initializes the [auditTrail] property with a new instance of the AuditTrail class
  // we do this to ensure that the AuditTrail class is only instantiated once
  constructor() {
    this.auditTrail = new AuditTrail();
  }

  execute(): void {
    // call the [auditTrail] {record} method
    this.auditTrail.record();
    // this would be the logic for transferring money and shit
    console.log("Transfer money");
  }
}
