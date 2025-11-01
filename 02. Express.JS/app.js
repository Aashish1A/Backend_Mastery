import express from "express";

// import { searchController, usernameController } from "./controller.js";
import { userLogin, userSignup } from "./controller.js";
import router from "./route.js";

const app = express();

const PORT = 3000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Handle multiple route parameters & also using regex
app.get("/things/:name/:id([0-9]{5})", (req, res)=> {
  const {name,id} = req.params;
  res.json({
    id,
    name
  })
})

// ---------Dynamic routing-----------
// app.get('/user/:username',usernameController)
// app.get("/search",searchController)
// app.get("/user/login", userLogin);
// app.get("/user/signup", userSignup);
app.use('/user', router);

// POSt Methods in HTTP Methods
app.use(express.json());

app.post("/users", (req, res)=> {
  const {name, email} = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully!`
  })
})

// PUT Request in HTTP Methods
app.put("/users/:id", (req, res)=> {
  const userId = req.params.id;
  const {name, email} = req.body;
  res.json({
    message: `User ${userId} updated to ${name}, ${email}`
  })
})

// Delete Request in HTTP Methods
app.delete("/users/:id", (req, res)=> {
  const userId = req.params.id;
  res.json({
    message: `User with id ${userId} deleted successfully!`
  })
})

// Catch all invalid routes
app.get("*", (req, res)=> {
  res.send("Sorry, this is an invalid URL.")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
