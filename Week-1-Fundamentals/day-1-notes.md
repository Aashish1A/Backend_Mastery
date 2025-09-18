# Day 1: Environment Setup & Node.js Basics

# Day 1: Node.js Basics - Interview Ready Notes

## 🎯 Essential Interview Knowledge

### 1. Node.js Core Concepts

**Q: What is Node.js?**
**A:** JavaScript runtime built on Chrome's V8 engine for server-side development. Uses event-driven, non-blocking I/O model.

**Q: Key features of Node.js?**
**A:**

- Single-threaded with event loop
- Non-blocking I/O operations
- NPM package ecosystem
- Cross-platform

**Q: Explain Node.js Event Loop**
**A:** Single-threaded loop that handles async operations. Processes callbacks from completed I/O without blocking main thread.

**Q: Node.js vs Browser JavaScript?**
**A:**

- Node.js: File system access, no DOM, CommonJS modules
- Browser: DOM access, limited system access, ES6 modules

### 2. NPM & Package Management

**Q: What is NPM?**
**A:** Node Package Manager - installs, manages, and publishes JavaScript packages.

**Q: package.json purpose?**
**A:** Configuration file with project metadata, dependencies, scripts, and version info.

**Q: dependencies vs devDependencies?**
**A:**

- `dependencies`: Production requirements (express, mongoose)
- `devDependencies`: Development tools (nodemon, jest)

**Q: Key NPM commands?**
**A:**

```bash
npm init                 # Create package.json
npm install package-name # Install package locally
npm install -g package   # Install globally
npm install              # Install all dependencies
```

### 3. Module System

**Q: How do Node.js modules work?**
**A:**

```javascript
// Export
module.exports = { func1, var1 };
exports.myFunc = () => {};

// Import
const { func1 } = require("./module");
const express = require("express");
```

**Q: CommonJS vs ES6 modules?**
**A:**

- CommonJS: `require()/module.exports` (Node.js default)
- ES6: `import/export` (modern, needs "type": "module")

### 4. Global Objects

**Q: Important Node.js globals?**
**A:**

- `__dirname` - Current directory path
- `__filename` - Current file path
- `process` - Process information
- `console` - Console output
- `Buffer` - Binary data handling

## � Quick Code Examples

### Basic Server

```javascript
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});
server.listen(3000);
```

### Module Export/Import

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// app.js
const { add, subtract } = require("./math");
console.log(add(5, 3)); // 8
```

## 💡 Interview Tips

### Common Mistakes to Avoid:

- Don't say "Node.js is a framework" (it's a runtime)
- Don't confuse blocking vs non-blocking I/O
- Don't mix up local vs global package installation

### Must-Know Facts:

- Node.js uses libuv for async I/O
- Single-threaded but uses thread pool for file operations
- NPM is the largest software registry
- package-lock.json ensures consistent installs

## ✅ Day 1 Checklist

- [ ] Can explain what Node.js is in 30 seconds
- [ ] Know the difference between require() and import
- [ ] Understand package.json structure
- [ ] Can create and run a basic Node.js script
- [ ] Know 5+ NPM commands by heart

---

**🎯 Interview Readiness:** Basic Node.js concepts
**⏱️ Study Time:** 1-2 hours  
**🔥 Key Focus:** Definitions, module system, NPM basics
