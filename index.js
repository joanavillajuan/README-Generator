// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message:
        "What is your project about? Provide a detailed description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the instruction for usage?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the license being used?",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "What commands are needed to test this project",
    },
  ]);
  // . then (response => {
  //     console.log(response);
  //     })
};

// promptUser();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md")
  );
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then((answers) => {
    console.log(answers)
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
