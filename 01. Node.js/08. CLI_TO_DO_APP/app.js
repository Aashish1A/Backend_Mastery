import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("\n2: View Tasks ");
  console.log("\n3: Exit");

  rl.question("\nChoose an option : ", handleInput);
};

const handleInput = (option) => {
  if (option == "1") {
    rl.question("\nEnter the task : ", (task) => {
      todos.push(task);
      console.log("Task added : ", task);
      showMenu();
    });
  } else if (option == "2") {
    rl.question("\nView the task", (task) => {
      console.log("\nYour Todo Lists : ");
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
      showMenu();
    });
  } else if (option == "3") {
    console.log("\nGood Bye");
    rl.close();
  } else {
    console.log("Invalid option selected");
    showMenu();
  }
};

showMenu();
