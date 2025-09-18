# Day 2: JavaScript for Backend - Interview Ready Notes

## 🎯 Essential Interview Knowledge

### 1. Async JavaScript Mastery

**Q: What are Promises?**
**A:** Objects representing eventual completion/failure of async operations. Has 3 states: pending, fulfilled, rejected.

**Q: Promise vs Callback?**
**A:**

- Promises: Better error handling, no callback hell, chainable
- Callbacks: Can lead to nested code (callback hell)

**Q: Explain async/await**
**A:** Syntactic sugar over Promises. Makes async code look synchronous.

```javascript
// Promise
getData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Async/await
try {
  const data = await getData();
  console.log(data);
} catch (err) {
  console.error(err);
}
```

**Q: How to handle multiple async operations?**
**A:**

```javascript
// Sequential
const data1 = await getData1();
const data2 = await getData2();

// Parallel
const [data1, data2] = await Promise.all([getData1(), getData2()]);

// Race condition
const winner = await Promise.race([getData1(), getData2()]);
```

### 2. ES6+ Features for Backend

**Q: What is destructuring?**
**A:** Extract values from arrays/objects into variables.

```javascript
// Object destructuring
const { name, age } = user;
const { name: userName, age = 25 } = user; // rename + default

// Array destructuring
const [first, second, ...rest] = array;
```

**Q: Arrow functions vs regular functions?**
**A:**

- Arrow: Lexical `this`, no `arguments`, can't be constructor
- Regular: Dynamic `this`, has `arguments`, can be constructor

**Q: What is the spread operator?**
**A:** `...` operator to expand arrays/objects.

```javascript
// Arrays
const newArray = [...oldArray, newItem];

// Objects
const newObj = { ...oldObj, newProp: "value" };

// Function arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### 3. Advanced Concepts

**Q: Explain JavaScript Event Loop**
**A:**

1. **Call Stack**: Executes functions (LIFO)
2. **Web APIs**: Handle async operations
3. **Callback Queue**: Holds completed callbacks
4. **Event Loop**: Moves callbacks from queue to stack when stack is empty

**Q: What are Closures?**
**A:** Function that has access to outer function's variables even after outer function returns.

```javascript
function outer(x) {
  return function inner(y) {
    return x + y; // 'x' is captured in closure
  };
}
const add5 = outer(5);
console.log(add5(3)); // 8
```

**Q: Hoisting in JavaScript?**
**A:** Variables and function declarations are moved to top of scope during compilation.

```javascript
console.log(x); // undefined (not error)
var x = 5;

// Function declarations are fully hoisted
sayHi(); // Works
function sayHi() {
  console.log("Hi");
}

// let/const are hoisted but in temporal dead zone
console.log(y); // ReferenceError
let y = 10;
```

## 🔥 Quick Code Examples

### Error Handling Patterns

```javascript
// Try-catch with async/await
async function fetchUser(id) {
  try {
    const user = await getUserById(id);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    throw error; // Re-throw or handle appropriately
  }
}

// Promise error handling
fetchUser(123)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
```

### Modern Array Methods

```javascript
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

// Map: Transform each element
const names = users.map((user) => user.name);

// Filter: Select elements
const adults = users.filter((user) => user.age >= 18);

// Reduce: Accumulate values
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// Find: Get first match
const john = users.find((user) => user.name === "John");
```

## 💡 Interview Tips

### Common Mistakes:

- Forgetting `await` in async functions
- Not handling Promise rejections
- Confusing `this` in arrow functions
- Mixing callbacks with Promises

### Must-Know:

- Event loop phases and microtasks
- When to use `var` vs `let` vs `const`
- Template literals with expressions
- Rest vs spread operator differences

## ✅ Day 2 Checklist

- [ ] Can explain Promises in 1 minute
- [ ] Know async/await error handling
- [ ] Understand destructuring syntax
- [ ] Know 5+ array methods
- [ ] Can explain event loop basics

---

**🎯 Interview Readiness:** Async JavaScript, ES6+ features
**⏱️ Study Time:** 2-3 hours  
**🔥 Key Focus:** Promises, async/await, modern JavaScript features
