import { AuditTrail } from "./AuditTrail";
export declare abstract class Task {
    private auditTrail;
    constructor(auditTrail: AuditTrail);
    execute(): void;
    protected abstract doExecute(): void;
}
