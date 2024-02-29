const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a triangle svg
class Triangle extends Shape {
  constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor);
  }

  render() {}
}

module.exports = Triangle;
