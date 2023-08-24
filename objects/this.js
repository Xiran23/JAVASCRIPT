const car = {
  model: "mustang ",
  made: 2019,
  color: "red",

  drive: function () {
    console.log(
      `the car name is ${this.model} and the model year us ${this.made}`
    );
  },
};

car.drive();
