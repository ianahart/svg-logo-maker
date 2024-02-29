const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a square svg
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {}
}

module.exports = Square;
