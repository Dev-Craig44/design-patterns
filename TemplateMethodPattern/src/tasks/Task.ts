import { AuditTrail } from "./AuditTrail";

// 7.) because we have a abstract class in here we need to mark this class as abstract
// 1.) create Task class
export abstract class Task {
  // 3.) declare a private field of type AuditTrail
  private auditTrail: AuditTrail;

  // 4.) initialize it using a constructor
  // having a constructor with this parameter would be useful if we were dealing with an interface
  constructor(auditTrail: AuditTrail) {
    this.auditTrail = new AuditTrail();
  }

  // 2.) make a method called execute
  execute(): void {
    // this is where we would define the template for executing our tasks
    // 5.) so this is where we would call our |auditTrail|
    this.auditTrail.record();

    // now what happens after this will depend on our subclasses
    // so we will call the {doExecute} abstract method here
    this.doExecute();
  }

  // 6.) add the abstract method, public abstract void
  // 11.) to solve the problem of people having access to the doExecute method we will switch the access modifier to protected
  // this way we can only access this method from the subclasses
  // it similiar in the sense of having a private method within the class but it makes it visible to the subclasses
  protected abstract doExecute(): void;
}
