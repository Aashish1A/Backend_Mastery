import express from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();

const PORT = 3000;

app.use(express.json());

await connectDB();


app.get("/", (req, res) => {
  res.send("Hello MongoDB!");
});


// Saving Data in MongoDB
app.post("/person", async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const newPerson = new Person({
      name,
      age,
      email,
    });
    await newPerson.save();
    console.log(newPerson);
    res.send("Person Added!");
  } catch (error) {
    res.send(error.message);
  }
});


// Updating data in DataBase in MongoDB
app.put("/person", async (req, res) => {
  const { id } = req.body;

  const personData = await Person.findByIdAndUpdate(id, { age: 18 });
  // const personData = await Person.findById(id)
  // personData.age = 20;
  // await personData.save()

  console.log(personData);

  res.send("Person Updated!");
});


// Deleting data from MongoDB
app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("User deleted");
});

app.listen(PORT, () => {
  console.log(`Port is running on http://localhost:${PORT}`);
});
