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
});
