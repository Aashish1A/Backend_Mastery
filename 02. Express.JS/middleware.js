import express from "express";

const app = express();

const PORT = 3000;

// _------------MiddleWare-----------
// app.use("/welcome", (req, res, next) => {
//   console.log("A new request received at : " + Date.now());
//   next();
// });
// app.get("/welcome", (req, res) => {
//     res.send("Welcome to  Express App!");
// });


// app.use((req, res, next)=> {
//     console.log("Start");

//     res.on("finish", ()=> {
//         console.log("End");
//     })

//     next();
// })

// Creating error and handling
app.get("/error", ()=> {
    throw new Error("This is test error!");
})
app.use((error, req, res, next) => {
    console.log(error.message);
    res.send("Internal Server Error!")
})


app.get("/", (req, res) => {
    console.log("Middle");
  res.send("Hello Express!");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
