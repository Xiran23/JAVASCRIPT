//getter and setter
// _ mean protected

class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }

  get power() {
    return `${this._power}`;
  }

  get gas() {
    return `${this._gas}l (${(this._gas / 100) * 100}%)`;
  }

  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car();

car.gas = -1;
console.log(car.gas);
