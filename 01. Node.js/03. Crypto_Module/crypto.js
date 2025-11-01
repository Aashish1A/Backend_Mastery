/*
    1: crypto.randomByte(size) : Generates cryptographically strong random data. Useful fo creating tokens or unique IDs.
    2: crypto.createHash(algorithm) : Creates a hash for a given input using algorithms like sha256. Ensures data integrity.
*/

const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);

const hashValue = crypto.createHash("sha256").update("aashish").digest("hex");
console.log(hashValue);
