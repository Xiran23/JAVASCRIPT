class car {
  static numberofcars = 0;
  constructor(model) {
    this.model = model;
    car.numberofcars += 1;
  }

  static race() {
    console.log("go gfog ogo og");
  }
}
console.log("result");
const obj1 = new car("mustang ");
const obj2 = new car("carsss");
const obj22 = new car("carsss");
console.log(car.numberofcars);

obj1.race();
