console.log("Hey there! I am JS");

// module in node.js
const math = require("./math");
console.log(math.add(4,5));

const {add, subs, div} = require("./math");
console.log(add(2,5));
console.log(subs(5,2));
console.log(div(6,2));

