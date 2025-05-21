import { AuditTrail } from "./tasks/AuditTrail";
import { TransferMoneyTask } from "./tasks/TransferMoneyTask";

export class Main {
  public static main(): void {
    const task = new TransferMoneyTask(new AuditTrail());

    // the problem with this implementation is that we we can skip recording information in the audit trail by calling the execute method directly
    task.doExecute();
    // this is completely against the idea of implementing this execute method in the base class
  }
}
