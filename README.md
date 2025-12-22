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

### Communication Styles

#### **Push Model:** Subject → Observers (Subject controls the data flow)

**How it works:**

- The subject notifies observers by calling their `update()` methods and **passing the changed data as arguments**
- Observers receive whatever data the subject decides to send
- The subject controls what information flows to observers

**Example:**

```typescript
interface Observer {
  update(value: number): void; // Subject decides what to push
}

class DataSource extends Subject {
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this._value); // Pushes the value
    }
  }
}
```

**Problem:**

- **Tight coupling:** Observers depend on the specific data format the subject provides
- **Inflexible:** If one observer needs additional data (e.g., timestamp, metadata), we must modify the `Observer` interface, affecting ALL observers
- **Interface bloat:** Adding parameters for different observer needs clutters the interface

```typescript
// Interface keeps growing as needs change
interface Observer {
  update(value: number, timestamp: Date, source: string): void; // ❌
}
```

---

#### **Pull Model:** Observers ← Subject (Observers control what they need)

**How it works:**

- The subject simply notifies observers that **something changed** (without sending data)
- Observers receive a reference to the subject
- Each observer **pulls only the specific data it needs** from the subject

**Example:**

```typescript
interface Observer {
  update(subject: Subject): void; // Observer gets reference, not data
}

class DataSource extends Subject {
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this); // Just passes itself
    }
  }

  get data(): number {
    return this._value;
  }
  get timestamp(): Date {
    return this._timestamp;
  }
}

class SpreadSheet implements Observer {
  update(subject: Subject) {
    if (subject instanceof DataSource) {
      const value = subject.data; // Pulls only what it needs
      console.log(`SpreadSheet: ${value}`);
    }
  }
}

class Chart implements Observer {
  update(subject: Subject) {
    if (subject instanceof DataSource) {
      const value = subject.data;
      const time = subject.timestamp; // Pulls additional data
      console.log(`Chart: ${value} at ${time}`);
    }
  }
}
```

**Benefits:**

- **Loose coupling:** Observers don't depend on a specific data format
- **Flexible:** Each observer pulls only what it needs
- **Extensible:** Adding new properties to the subject doesn't break existing observers
- **Efficient:** Reduces unnecessary data transfer when observers need different information

**Trade-off:**

- Observers need to know about the subject's interface (must cast to specific type)
- Slightly more complex code in observers

---

#### When to Use Which?

| Use Case                                    | Push Model | Pull Model |
| ------------------------------------------- | ---------- | ---------- |
| **All observers need the same data**        | ✅         | ❌         |
| **Different observers need different data** | ❌         | ✅         |
| **Simple notifications**                    | ✅         | ❌         |
| **Complex state objects**                   | ❌         | ✅         |
| **Want to minimize coupling**               | ❌         | ✅         |

---

#### Coupling Direction Explained

**Push Model (Subject → Observers):**

```
┌──────────┐
│ Subject  │  Controls what data flows
└────┬─────┘
     │ pushes data
     ▼
┌──────────┐
│ Observer │  Receives what's given
└──────────┘
```

**Coupling:** Observer interface depends on Subject's data format

**Pull Model (Observers ← Subject):**

```
┌──────────┐
│ Subject  │  Provides access to data
└────▲─────┘
     │ pulls data
     │
┌────┴─────┐
│ Observer │  Decides what it needs
└──────────┘
```

**Coupling:** Observer decides what to retrieve, more flexible

### The Push Style

### The Pull Style

### Exercise: Stock Price Notification System

**Problem:**

We're building an application for watching the price of various stocks. There are two places in our application where we need to display stocks:

- **StatusBar**: Shows popular stocks
- **StockListView**: Shows the complete list of stocks

**Current Issue:**

When the price of a stock changes, the corresponding views (StatusBar and/or StockListView) need to be refreshed to reflect the latest price. Our application currently does NOT have the ability to communicate stock price changes to these views.

**Task:**

Use the **Observer Pattern** to solve this problem so that:

1. When a stock price changes, all registered observers are automatically notified
2. The StatusBar and StockListView automatically refresh when stock prices update
3. The Stock class doesn't need to know about the specific views observing it

**Files to Modify:**

- `Stock.ts` - Should act as the Subject (Observable)
- `StatusBar.ts` - Should implement Observer interface
- `StockListView.ts` - Should implement Observer interface

**Expected Behavior:**

```typescript
const stock = new Stock("AAPL", 150);

const statusBar = new StatusBar();
const listView = new StockListView();

stock.addObserver(statusBar);
stock.addObserver(listView);

stock.setPrice(155); // Both views should be automatically notified and updated
```

## Mediator Pattern

**Problem:** We need to reduce the complexity of communication between multiple objects (colleagues) by centralizing the interactions.
**Solution:** The Mediator Pattern defines an object (the mediator) that encapsulates how a set of objects interact. This promotes loose coupling by preventing objects from referring to each other explicitly, allowing their interaction to be varied independently.

### Implementation Using The Observer Pattern

**Problem:** We need to implement the Mediator Pattern to manage communication between multiple colleague objects without them directly referencing each other.
**Solution:** We can use the Observer Pattern to implement the Mediator Pattern. The mediator will act as the subject, and the colleague objects will be observers. When a colleague needs to communicate, it notifies the mediator, which then informs the relevant colleagues.

A functional interface is a type that has exactly one abstract method. They can be used to represent single-method interfaces (functional interfaces) using lambda expressions or method references, making the code more concise and readable.
