const Circle = require('./classes/Circle');
const Square = require('./classes/Square');
const Triangle = require('./classes/Triangle');

// determine which shape to render and return to be written to an svg file
const createShape = ({ shape, text, textColor, shapeColor }) => {
  let renderedShape;

  switch (shape) {
    case 'circle':
      const circle = new Circle(text, textColor, shapeColor);
      renderedShape = circle.render();
      break;
    case 'triangle':
      const triangle = new Triangle(text, textColor, shapeColor);
      renderedShape = triangle.render();
      break;
    case 'square':
      const square = new Square(text, textColor, shapeColor);
      renderedShape = square.render();
      break;
  }

  return renderedShape;
};

module.exports = createShape;
