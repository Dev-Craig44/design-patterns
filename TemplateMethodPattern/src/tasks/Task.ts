import { AuditTrail } from "./AuditTrail";

// because we have a abstract class in here we need to mark this class as abstract
export abstract class Task {
  private auditTrail: AuditTrail;

  // initialize it using a constructor
  constructor(auditTrail: AuditTrail) {
    this.auditTrail = new AuditTrail();
  }

  execute(): void {
    // this is where we would define the template for executing our tasks
    // so this is where we would call our |auditTrail|
    this.auditTrail.record();

    // now what happens after this will depend on our subclasses
    // so we will call the {doExecute} abstract method here
    this.doExecute();
  }

  // add the abstract method, public abstract void
  public abstract doExecute(): void;
}
