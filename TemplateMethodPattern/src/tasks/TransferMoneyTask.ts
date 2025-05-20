import { AuditTrail } from "./AuditTrail";

export class TransferMoneyTask {
  private auditTrail: AuditTrail;

  constructor() {
    this.auditTrail = new AuditTrail();
  }

  execute(): void {
    this.auditTrail.record();
    console.log("Transfer money");
  }
}
