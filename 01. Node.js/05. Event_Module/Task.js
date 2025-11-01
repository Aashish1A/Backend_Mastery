const fs = require("fs");
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// File to store event counts
const EVENT_COUNT_FILE = "eventCount.json";

// Function to load event count from file
const loadEventCount = () => {
    try {
        if (fs.existsSync(EVENT_COUNT_FILE)) {
            return JSON.parse(fs.readFileSync(EVENT_COUNT_FILE, "utf-8"));
        }
    } catch (error) {
        console.error("Error reading event count file:", error);
    }
    return {
        "login": 0,
        "Logout": 0,
        "Purchase": 0,
        "ProfileUpdate": 0,
    };
};

// Function to save event count to file
const saveEventCount = (eventCount) => {
    try {
        fs.writeFileSync(EVENT_COUNT_FILE, JSON.stringify(eventCount, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing event count file:", error);
    }
};

// Load event count from file
let eventCount = loadEventCount();

// Define event listeners
emitter.addListener("login", (userName) => {
    eventCount["login"]++;
    console.log(`${userName} logged in`);
    saveEventCount(eventCount);
});
emitter.addListener("Purchase", (userName, product) => {
    eventCount["Purchase"]++;
    console.log(`${userName} purchased ${product}!`);
    saveEventCount(eventCount);
});
emitter.addListener("ProfileUpdate", (userName, update) => {
    eventCount["ProfileUpdate"]++;
    console.log(`${userName} updated their ${update}!`);
    saveEventCount(eventCount);
});
emitter.addListener("Logout", (userName) => {
    eventCount["Logout"]++;
    console.log(`${userName} logged out`);
    saveEventCount(eventCount);
});

// Summary event
emitter.addListener("summary", () => {
    console.log("Event Summary:", eventCount);
});

// Trigger events
emitter.emit("login", "Aashish");
emitter.emit("Purchase", "Aashish", "Laptop");
emitter.emit("ProfileUpdate", "Aashish", "Email");
emitter.emit("Logout", "Aashish");

// Show the summary
emitter.emit("summary");
