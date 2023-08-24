class Cars {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`you drive ${this.model}`);
  }
}

const obj1 = new Cars("sdsd", 23, "agewsdf");
const obj2 = new Cars("heyhey", 2323, "bibibi");
const obj3 = new Cars("soft ", 23, "gogogo");

const cars = [obj1, obj2, obj3];
// arrya of an objects

console.log(cars);

console.log(cars[0].model);
cars[2].drive();

function race() {
  for (const i of cars) {
    i.drive();
  }
}

race();
