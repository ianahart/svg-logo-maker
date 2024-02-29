// Shape (parent) class that will be the inherited class to circle, triangle, square

class Shape {
  text;

  shapeColor;

  textColor;

  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

module.exports = Shape;
