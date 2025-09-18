// Day 1: Node.js Basics - Setup and First Application
// Run this file with: node day-1-setup.js

console.log("🚀 Welcome to Backend Mastery - Day 1!");
console.log("Node.js Version:", process.version);
console.log("Platform:", process.platform);

// Understanding Node.js Global Objects
console.log("\n=== Node.js Global Objects ===");
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);
console.log("Process ID:", process.pid);

// Working with Process object
console.log("\n=== Process Information ===");
console.log("Node.js arguments:", process.argv);
console.log("Environment:", process.env.NODE_ENV || "development");

// Basic module demonstration
console.log("\n=== Module System Demo ===");

// Exporting functions (this file can be imported by others)
function greetUser(name) {
  return `Hello ${name}, welcome to Backend Mastery!`;
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

// Calculate uptime
function getUptime() {
  return `Process uptime: ${process.uptime()} seconds`;
}

// Export functions for use in other modules
module.exports = {
  greetUser,
  getCurrentTimestamp,
  getUptime,
};

// If this file is run directly (not imported)
if (require.main === module) {
  console.log("\n=== Running Day 1 Demo ===");
  console.log(greetUser("Backend Developer"));
  console.log("Current time:", getCurrentTimestamp());
  console.log(getUptime());

  // Demonstrate setTimeout (asynchronous nature)
  console.log("\n=== Asynchronous Demo ===");
  console.log("Setting timeout...");

  setTimeout(() => {
    console.log("✅ This runs after 2 seconds - demonstrating async nature!");
  }, 2000);

  console.log("This runs immediately (non-blocking)");

  // Exit gracefully
  setTimeout(() => {
    console.log("\n🎉 Day 1 setup complete! Ready for tomorrow's learning.");
    process.exit(0);
  }, 3000);
}

/* 
💡 Key Learning Points:
1. Node.js runs JavaScript outside the browser
2. It's event-driven and non-blocking
3. Global objects like __dirname, __filename, process are available
4. module.exports is used to share code between files
5. Asynchronous operations don't block the main thread
*/
