const car = {
  model: "mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log("you drive the car");
  },
  break: function () {
    console.log("Cars stops");
  },
};
console.log(car.model);
car.break();
car.drive();
