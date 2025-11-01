// Import EventEmitter class
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

//1. Define an event listener (addEventListener)
// emitter.addListener("greet", () => {
//     console.log("Hey Aashish");
// })

//2. Trigger (emit) the "greet" event
// emitter.emit("greet");

// We can also pass argument while emitting
emitter.addListener("greet", (userName) => {
    console.log(`Hi, ${userName}`);
})

emitter.emit("greet", "Aashish Kumar");