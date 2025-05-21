import { AuditTrail } from "./AuditTrail";

// because we have a abstract class in here we need to mark this class as abstract
export abstract class Task {
  private auditTrail: AuditTrail;

  // initialize it using a constructor
  // having a constructor with this parameter would be useful if we were dealing with an interface
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
  // to solve the problem of people having access to the doExecute method we will switch the access modifier to protected
  // this way we can only access this method from the subclasses
  // it similiar in the sense of having a private method within the class but it makes it visible to the subclasses
  protected abstract doExecute(): void;
}
