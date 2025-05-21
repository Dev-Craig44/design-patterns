import { AuditTrail } from "./tasks/AuditTrail";
import { TransferMoneyTask } from "./tasks/TransferMoneyTask";

export class Main {
  public static main(): void {
    const task = new TransferMoneyTask(new AuditTrail());

    // the problem with this implementation is that we we can skip recording information in the audit trail by calling the execute method directly
    // now we get a compilation error because this method is now not accessible outside of our Task class
    task.execute();
    // this is completely against the idea of implementing this execute method in the base class
  }
}

Main.main();
