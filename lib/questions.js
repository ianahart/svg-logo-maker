const colorKeywords = require('./colorKeywords');

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
    name: 'textColorFormat',
    message: 'What text color format would you like to use?',
    choices: ['hexadecimal', 'color keyword'],
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color text would you like to use? (color keyword)',
    when: (answers) => {
      if (answers.textColorFormat === 'color keyword') {
        return true;
      }
      return false;
    },
    filter: (answer) => answer.toLowerCase(),
    validate: (answer) => {
      const found = colorKeywords.findIndex((color) => color.toLowerCase() === answer);
      if (found === -1) {
        return 'Please enter a valid color keyword';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color text text would you like to use? (hexadecimal #000000)',
    when: (answers) => {
      if (answers.textColorFormat === 'hexadecimal') {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegExp = '^#[A-Fa-f0-9]{6}$';
      if (!answer.match(hexRegExp)) {
        return 'Please enter a valid hexadecimal';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['circle', 'triangle', 'square'],
  },
];

module.exports = questions;
