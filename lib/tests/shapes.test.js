const { Circle, Triangle, Square } = require('../shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    describe('instantiate', () => {
      it('should be an instance of Circle class', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
      });
    });
    describe('render', () => {
      it('should return the correct circle SVG XML', () => {
        const circle = new Circle('IAH', 'white', 'blue');
        expectedValue = `
     <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">IAH</text>
     </svg>
    `;
        expect(circle.render()).toEqual(expectedValue);
      });
    });
  });

  describe('Triangle', () => {
    describe('instantiate', () => {
      it('should be an instance of Triangle class', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
      });
    });
    describe('render', () => {
      it('should return the correct triangle SVG XML', () => {
        const triangle = new Triangle('IAH', '#000000', '#0000FF');
        expectedValue = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon x="10" y="10" width="200" height="200" points="100 15, 200 200, 0 200"  fill="#0000FF"/>
          <text x="100" y="185" font-size="60" text-anchor="middle" fill="#000000">IAH</text>
        </svg>
    `;
        expect(triangle.render()).toEqual(expectedValue);
      });
    });
  });
});
