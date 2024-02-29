const createShape = require('./lib/createShape');
const questions = require('./lib/questions');
const inquirer = require('inquirer');

const promptUser = () => {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      const shape = createShape(answers);
      console.log(shape);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log('Something went wrong');
      }
    });
};

const init = () => {
  promptUser();
};

init();
