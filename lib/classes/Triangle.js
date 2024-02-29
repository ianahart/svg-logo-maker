const Shape = require('./Shape');

// Child class that inherits from Shape parent class that renders a triangle svg
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon x="10" y="10" width="200" height="200" points="50 15, 100 100, 0 100"  fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
  }
}

module.exports = Triangle;
