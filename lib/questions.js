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
  {
    type: 'list',
    name: 'colorFormat',
    message: 'What text color format would you like to use?',
    choices: ['hexadecimal', 'color keyword'],
  },
];

module.exports = questions;
