/* The fs(File System) module in Node.js is a core module that allows us to
    work with file system, enabling us to read, write, update, delete, and watch file.
*/

const fs = require("fs");
/*------------------ FS Module sync ---------------*/

// const path = require("path");

// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);


// Write in a file
// const writeFile = fs.writeFileSync(filePath, "This is initial data", "utf-8");
// console.log(writeFile);

// Read through a file
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile.toString());
// console.log(readFile);

// Append in a file
// const appendFile = fs.appendFileSync(filePath, "\nThis is updated data", "utf-8");
// console.log(appendFile);

// Delete a file
// const deletedFile = fs.unlinkSync(filePath);
// console.log(deletedFile);


// Rename file
// const renameFile = fs.renameSync(filePath, "data.txt");
// console.log(renameFile);


/*------------------ FS Module Async ---------------*/

// const path = require("path");

// const fileName = "fsAsync.txt";
// const filePath = path.join(__dirname, fileName);

// const writeFile = fs.writeFile(filePath, "Writing to a file", "utf-8", (err)=> {
//     if(err) console.log(err);
//     else console.log("File has been saved");
// })

// const readFile = fs.readFile(filePath, "utf-8", (err,data)=> {
//     if(err) console.log(err);
//     else console.log(data);
// })

// const appendingFile = fs.appendFile(filePath, "\nappending to a file", "utf-8", (err)=> {
//     if(err) console.log(err);
//     else console.log("File has been appended");
// })

// const deleteFile = fs.unlink(filePath, (err)=> {
//     if(err) console.log(err);
//     else console.log("File has been deleted");
// })


/*------------------ FS Module Promises ---------------*/
// const fs = require("fs/promises");

// const path = require("path");


// const fileName = "promises.txt";
// const filePath = path.join(__dirname, fileName);

// const file = __dirname;

// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// writing to a file
// fs.promises.writeFile(filePath, "This is data written in file using promises", "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// Reading from a file
// fs.promises.readFile(filePath, "utf-8")
//     .then((data) => console.log(data))

// Append through a file
// fs.promises.appendFile(filePath, "\nAppending content in a file", "utf-8")
//     .then((data) => console.log(data))
//     .catch(err => console.error(err))

// Deleting a file
// fs.promises.unlink(filePath)
//     .then(data => console.log(data))
//     .then(err => console.error(err))


/*------------------ FS Module Async-await ---------------*/


// const path = require("path");


// const fileName = "async-await.txt";
// const filePath = path.join(__dirname, fileName);

//Writing in a file
// const writeFiles = async () => {
//     try{
//         const data = await fs.promises.writeFile(filePath, "This is data written in file using promises", "utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// writeFiles();

// Reading through a file
// const readFolder = async () => {
//     try{
//         const data = await fs.promises.readFile(filePath, "utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// readFolder();

// Appending file content
// const appendFiles = async () => {
//     try{
//         const data = await fs.promises.appendFile(filePath, "\n Appending data in the file", "utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// appendFiles();
