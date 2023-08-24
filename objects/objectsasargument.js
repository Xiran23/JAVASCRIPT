class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const obj1 = new Car("mustang ", 2023, "red");
const obj2 = new Car("lambo", 2034, "blue");
const obj3 = new Car("volo", 3434, "green");

dislplycarInfo(obj1);
changeColor(obj2, "voilet");
function dislplycarInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

function changeColor(car, color) {
  car.color = color;
}
dislplycarInfo(obj2);
console.table(dislplycarInfo(obj1));
