import express from "express";

const app = express();

const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", 'ejs');

app.get("/", (req, res) => {
  const userName = "Hello Aashish Kumar";
  res.render("index", {userName});
});


//-----How to expose folder text and images
app.use("/public",express.static("public"));
app.use("/images",express.static("images"));



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});