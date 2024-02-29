const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a square svg
class Square extends Shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {}
}

module.exports = Square;
