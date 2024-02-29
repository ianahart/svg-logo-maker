const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What text would you like to display in your new shape?',
    validate: (answer) => {
      if (answer.length > 3 || answer.length < 1) {
        return 'There is a maximum of three characters and a minimum of 1 character';
      }
      return true;
    },
  },
];

module.exports = questions;
