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
