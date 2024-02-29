// Shape (parent) class that will be the inherited class to circle, triangle, square

class Shape {
  text;

  shapeColor;

  textColor;

  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
}

module.exports = Shape;
