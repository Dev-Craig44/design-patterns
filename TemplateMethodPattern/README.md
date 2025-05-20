# Template Method Pattern

The **Template Method Pattern** is a behavioral design pattern that defines the skeleton of an algorithm in a base class. It allows subclasses to override specific steps without altering the overall structure of the algorithm. This approach promotes code reuse, enforces a consistent process, and provides flexibility for customizing individual steps.

## Git Workflow Note

While initializing the project repository, all modified files were accidentally staged before making the initial commit. To correct this, the following command was used to unstage all files:

```bash
git restore --staged .
```

## Problems & Improvements

- Address issues identified in the task files.
- Consider using encapsulation to hide implementation details.
- Create a base class to define a common interface for related classes, improving maintainability and consistency.

## Solutions

There are two main approaches to implementing the Template Method Pattern: **polymorphism** and **inheritance**.

### Using Polymorphism

- Define a `Task` interface with a single method: `execute()`.
- Create concrete implementations of `Task` (e.g., `TransferMoneyTask`, `GenerateReportTask`) that provide their own logic in `execute()`.
- Introduce a `TaskExecutor` class with an `execute(Task task)` method, which handles common behavior (such as calling `auditTrail.record()`) and then delegates to `task.execute()`.
- This approach leverages the **Strategy Pattern** by forwarding execution to the provided task object.

### Using Inheritance (Template Method Pattern)

- Create an abstract base class `Task` with a concrete `execute()` method that defines the algorithm's skeleton (e.g., calls `auditTrail.record()`).
- Declare an abstract method `doExecute()` in `Task` for steps that vary between subclasses.
- Subclasses (e.g., `TransferMoneyTask`, `GenerateReportTask`) extend `Task` and implement `doExecute()` with their specific logic.
- The `execute()` method in `Task` calls `doExecute()`, ensuring the overall structure remains consistent while allowing customization of individual steps.
- Optionally, provide default implementations for some methods in the base class—these are known as **hooks**—which subclasses can override if needed.

This pattern enforces a consistent process, promotes code reuse, and allows flexibility for subclasses to customize specific steps.
