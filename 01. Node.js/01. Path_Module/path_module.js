// Path Module
// In Node.js, the path module provides utilities for working with file and directory paths. It's a built-in module, so we don't need to install.
/*Special Node.js Constants
    --filename: provides the absolute path of the currently executing file.
    --dirname: provides the absolute directory path of the currently executing file.
    path.parse(), path.join(), path.resolve(), path.extname(), path.basename()
*/

const path = require("path");
const { parseArgs } = require("util");

// console.log(__dirname);
// console.log(__filename);

const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
console.log({parseData, resolvedPath, extname, basename, dirname});

