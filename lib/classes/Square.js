const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a square svg
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = Square;
