# 🎯 Backend Interview Questions - Daily Practice

# 🎯 Backend Interview Q&A - Daily Practice

## Day 1: Node.js Basics

### ⚡ Quick Fire (30 seconds each)

**Q: What is Node.js?**  
**A:** JavaScript runtime built on Chrome's V8 engine for server-side development.

**Q: Is Node.js single-threaded?**  
**A:** Main event loop is single-threaded, but uses thread pool for I/O operations.

**Q: What is NPM?**  
**A:** Node Package Manager - tool for installing and managing JavaScript packages.

**Q: Difference between require() and import?**  
**A:** require() is CommonJS (Node.js default), import is ES6 modules.

**Q: What is package.json?**  
**A:** Configuration file containing project metadata, dependencies, and scripts.

### 🔥 Intermediate (1-2 minutes each)

**Q: Explain Node.js Event Loop**  
**A:** Single-threaded loop that processes async callbacks. Has phases: timers, I/O callbacks, idle/prepare, poll, check, close callbacks. Non-blocking I/O allows handling multiple requests concurrently.

**Q: Dependencies vs DevDependencies?**  
**A:**

- dependencies: Required in production (express, mongoose)
- devDependencies: Development tools only (nodemon, jest)
- Install with `npm install --production` to skip devDependencies

**Q: How do Node.js modules work?**  
**A:**

```javascript
// Export: module.exports = {func1, var1} or exports.func = () => {}
// Import: const {func1} = require('./module')
// Node.js wraps modules in function with (exports, require, module, __filename, __dirname)
```

**Q: What are global objects in Node.js?**  
**A:** `__dirname`, `__filename`, `process`, `console`, `Buffer`, `global`, `require`

### 🚀 Advanced (3-5 minutes each)

**Q: How does require() work internally?**  
**A:**

1. Resolves file path
2. Checks module cache
3. Loads file content
4. Wraps in module wrapper
5. Executes code
6. Returns module.exports

**Q: Event Loop phases in detail**  
**A:**

1. **Timers**: setTimeout, setInterval callbacks
2. **I/O callbacks**: Error callbacks, some system operations
3. **Idle, prepare**: Internal use
4. **Poll**: Fetch new I/O events, execute I/O callbacks
5. **Check**: setImmediate callbacks
6. **Close callbacks**: Socket close events

---

## Day 2: JavaScript for Backend

### ⚡ Quick Fire (30 seconds each)

**Q: What are Promises?**  
**A:** Objects representing eventual completion/failure of async operations. Has 3 states: pending, fulfilled, rejected.

**Q: async/await vs Promises?**  
**A:** async/await is syntactic sugar over Promises, makes async code look synchronous.

**Q: What is destructuring?**  
**A:** Extract values from arrays/objects into variables: `const {name, age} = user;`

**Q: Arrow function vs regular function?**  
**A:** Arrow functions have lexical `this`, no `arguments` object, can't be constructors.

**Q: What is the spread operator?**  
**A:** `...` operator to expand arrays/objects: `const newArray = [...oldArray, newItem];`

### 🔥 Intermediate (1-2 minutes each)

**Q: How to handle multiple async operations?**  
**A:**

```javascript
// Sequential: await one by one
// Parallel: Promise.all([op1(), op2()])
// Race: Promise.race([op1(), op2()])
```

**Q: Explain JavaScript Event Loop**  
**A:** Call Stack executes functions → Web APIs handle async → Callback Queue holds results → Event Loop moves callbacks to stack when empty.

**Q: What are Closures?**  
**A:** Function accessing outer function's variables after outer function returns. Creates private variables.

**Q: Array methods: map, filter, reduce**  
**A:**

- map: Transform elements `arr.map(x => x * 2)`
- filter: Select elements `arr.filter(x => x > 5)`
- reduce: Accumulate `arr.reduce((sum, x) => sum + x, 0)`

### 🚀 Advanced (3-5 minutes each)

**Q: Hoisting in JavaScript?**  
**A:** Variables/functions moved to top during compilation. `var` → undefined, `let/const` → temporal dead zone, functions fully hoisted.

**Q: Promise chaining vs async/await error handling?**  
**A:**

```javascript
// Promise chaining
.then().catch() // Catches any error in chain

// async/await
try { await operation(); } catch(err) { /* handle */ }
```

### Day 2: JavaScript for Backend

**Easy Questions:**

1. What are Promises and how do they work?
2. Explain async/await syntax
3. What is destructuring assignment?
4. How do arrow functions differ from regular functions?
5. What is the spread operator?

**Medium Questions:**

1. How do you handle multiple asynchronous operations?
2. What is Promise chaining and how to avoid callback hell?
3. Explain the difference between map(), filter(), and reduce()
4. What are template literals and their benefits?
5. How do you handle errors in async/await?

**Advanced Questions:**

1. Explain the JavaScript event loop in detail
2. What are generators and how are they useful?
3. How do you implement custom error types?

---

## Coding Challenges

### Day 1 Challenges:

1. **Module Creation**: Create a math utility module with add, subtract, multiply, divide functions
2. **Package Manager**: Initialize a new npm project and install/uninstall packages
3. **Global Objects**: Write a script that logs system information using process object

### Day 2 Challenges:

1. **Promise Practice**: Convert callback-based functions to promises
2. **Async/Await**: Implement a function that fetches data from multiple sources
3. **Error Handling**: Create a robust error handling system for async operations

---

## Quick Reference Commands

### NPM Commands:

```bash
npm init                    # Initialize package.json
npm install package-name    # Install package locally
npm install -g package-name # Install package globally
npm uninstall package-name  # Remove package
npm list                    # List installed packages
npm outdated               # Check for outdated packages
npm update                 # Update packages
```

### Node.js Commands:

```bash
node file.js               # Run JavaScript file
node -v                    # Check Node.js version
npm -v                     # Check NPM version
node -e "console.log('hi')" # Execute inline JavaScript
```

---

## Daily Coding Exercises

### Exercise 1: Basic Module System

Create a file system that:

- Has a main app.js file
- Imports utility functions from separate modules
- Demonstrates different export patterns

### Exercise 2: Async Operations

Build a script that:

- Reads multiple files asynchronously
- Processes the data
- Handles errors gracefully
- Uses both Promises and async/await

### Exercise 3: Environment Setup

Create a development environment that:

- Uses environment variables
- Has different configurations for dev/prod
- Includes error logging
- Has automated testing setup

---

## Progress Tracking

- [ ] Interview questions answered: \_\_\_/15
- [ ] Coding challenges completed: \_\_\_/3
- [ ] Exercises finished: \_\_\_/3
- [ ] Concepts mastered: \_\_\_/5

**Today's Score:** \_\_\_/26 points
