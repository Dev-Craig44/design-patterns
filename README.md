# Design Patterns

Clean implementations of classic design patterns in TypeScript with real-world examples.

## 📦 Project Setup

Standard TypeScript project structure with `dist/` output.

### Quick Start

```bash
# Initialize and install TypeScript
npm init -y
npm install --save-dev typescript

# Create folder structure
mkdir src
touch src/index.ts tsconfig.json
```

### Configuration Files

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"]
}
```

#### package.json

```json
{
  "name": "design-patterns",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "tsc --watch",
    "build": "tsc",
    "start": "node dist/index.js",
    "clean": "rm -rf dist"
  },
  "keywords": ["design-patterns", "typescript"],
  "author": "William Kelly",
  "license": "MIT",
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```

### Folder Structure

```
/design-patterns
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
└── package.json
```

### Build and Run

```bash
npm run build
npm start
```

### Design Patterns Implemented

## Iterator Pattern

**Problem:** We need to iterate over a private collection without exposing its underlying representation.

**Solution:** The Iterator Pattern provides a way to access elements of a collection sequentially without exposing the underlying implementation.

**Key Points:**

- Avoid using getters to iterate over collections as this exposes internal structure
- Getters and setters should be placed at the end of class definitions for better readability
- Use the Iterator Pattern to provide controlled access to collection elements

---

_More patterns to be documented..._

## Command Pattern

**Problem:** We need to encapsulate requests as objects, allowing for parameterization of clients with queues, requests, and operations.

**Solution:** The Command Pattern encapsulates a request as an object, thereby allowing for the parameterization of clients with queues, requests, and operations.

### Composite Commands

**Problem:** We need to execute a sequence of commands as a single command.

**Solution:** Since each task is represented as a command object, we can combine multiple commands within a composite object and execute them together as a single operation.

### Undoable Commands

**Problem:** We need to provide the ability to undo operations performed by commands.

**Solution:** Add an UndoableCommand interface that extends the Command interface with an undo method. Each command implementing this interface will provide its own logic for undoing the operation.

## Observer Pattern

**Problem:** We need a way for objects to be notified of changes in other objects without tight coupling.
**Solution:** The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
