// 1. Create a rectangle calculator
// Create a rectangle object with width, height, and methods getArea() and getPerimeter(). Use this
// to access its properties

const rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height;
  },
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
};

console.log("Area:", rectangle.getArea());             
console.log("Perimeter:", rectangle.getPerimeter());  