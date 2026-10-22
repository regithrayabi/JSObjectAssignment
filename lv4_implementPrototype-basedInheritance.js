// 3. Implement prototype-based inheritance
// Create a Vehicle constructor with a shared getInfo() method on its prototype. Create a Car
// constructor that inherits from Vehicle and adds doors. Demonstrate inherited methods and verify
// that two cars share the same method reference.


function vehicle(make, model) {
  this.make = make;
  this.model = model;
}

vehicle.prototype.getInfo = function() {
  return `${this.make} ${this.model}`;
}

function car (make, model, doors) {
  vehicle.call(this, make, model);
}

car.prototype = Object.create(vehicle.prototype);
car.prototype.constructor = car;

const car1 = new car("Toyota", "Corolla", 4);
const car2 = new car("Honda", "Civic", 4);

console.log("Car 1 Info: ", car1.getInfo());
console.log("Car 2 Info: ", car2.getInfo());

console.log("Metode dibagikan (shared): ", car1.getInfo === car2.getInfo);