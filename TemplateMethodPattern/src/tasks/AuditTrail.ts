export class AuditTrail {
  // in the real application, this method needs a parameter for caputring information about who was performing the current task
  // AuditTrail class to log the actions performed
  // create a record function
  record(): void {
    console.log("Audit trail: Action performed.");
  }
}
