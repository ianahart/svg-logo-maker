const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a triangle svg
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {}
}

module.exports = Triangle;
