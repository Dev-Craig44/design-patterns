# Template Method Pattern

The **Template Method Pattern** is a behavioral design pattern that defines the skeleton of an algorithm in a base class, allowing subclasses to override specific steps without altering the overall structure. This pattern:

- Promotes **code reuse**
- Enforces a **consistent process**
- Provides **flexibility** for customizing individual steps

---

## 📝 Git Workflow Note

When initializing this project repository, all modified files were accidentally staged before the initial commit. To unstage all files, use:

```bash
git restore --staged .
```

---

## 🚩 Problems & Improvements

- Address issues identified in the task files.
- Use **encapsulation** to hide implementation details.
- Create a **base class** to define a common interface for related classes, improving maintainability and consistency.

---

## 💡 Solutions

There are two main approaches to implementing the Template Method Pattern:

### 1. Using Polymorphism

- Define a `Task` interface with a single method: `execute()`.
- Create concrete implementations of `Task` (e.g., `TransferMoneyTask`, `GenerateReportTask`) that provide their own logic in `execute()`.
- Introduce a `TaskExecutor` class with an `execute(task: Task)` method, which handles common behavior (such as calling `auditTrail.record()`) and then delegates to `task.execute()`.
- This approach leverages the **Strategy Pattern** by forwarding execution to the provided task object.

### 2. Using Inheritance (Template Method Pattern)

- Create an **abstract base class** `Task` with a concrete `execute()` method that defines the algorithm's skeleton (e.g., calls `auditTrail.record()`).
- Declare an **abstract method** `doExecute()` in `Task` for steps that vary between subclasses.
- Subclasses (e.g., `TransferMoneyTask`, `GenerateReportTask`) extend `Task` and implement `doExecute()` with their specific logic.
- The `execute()` method in `Task` calls `doExecute()`, ensuring the overall structure remains consistent while allowing customization of individual steps.
- Optionally, provide default implementations for some methods in the base class—these are known as **hooks**—which subclasses can override if needed.

> **Key Benefits:**
>
> - Enforces a consistent process
> - Promotes code reuse
> - Allows flexibility for subclasses to customize specific steps

---

## 🏋️ Exercise

In the Exercises project, review the `template/Window` class, which represents a window in a GUI framework. Application developers use this framework to build desktop applications. The `Window` class has a method for closing a window, but certain windows may need to execute custom code before or after closing.

Since the required behavior varies between windows, it cannot be hardcoded in the `Window` class. Use the Template Method Pattern to solve this problem by allowing subclasses to define custom actions before or after a window is closed.

---

## ✅ Solution (TypeScript Example)

To apply the Template Method Pattern in TypeScript:

1. **Create an abstract `WindowBase` class** that defines the skeleton of the window-closing algorithm.
2. The `closeWindow()` method in `WindowBase` should call two methods: `beforeClose()` and `afterClose()`.
3. These methods can be abstract or have default (empty) implementations, allowing subclasses to override them with custom behavior as needed.
4. Each specific window type can then extend `WindowBase` and provide its own implementation for `beforeClose()` and/or `afterClose()`, enabling custom actions to be performed before or after the window is closed, while preserving the overall structure of the closing process.

```typescript
abstract class WindowBase {
  public closeWindow(): void {
    this.beforeClose();
    this.close();
    this.afterClose();
  }

  protected beforeClose(): void {
    // Optional hook
  }

  protected afterClose(): void {
    // Optional hook
  }
  // This method is final and cannot be overridden
  private close(): void {
    console.log("Closing window...");
  }
}
```

> **Tip:** Use <kbd>Cmd</kbd> + <kbd>Opt</kbd> + <kbd>S</kbd> to save all files in your editor tabs.

---

**Summary:**  
The Template Method Pattern is a powerful tool for defining the structure of an algorithm while allowing subclasses to customize specific steps. It is especially useful in frameworks and libraries where a consistent process must be enforced, but flexibility is required for certain operations.
