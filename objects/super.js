class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
}
class fish extends Animal {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }
}

const obj1 = new Rabbit("rabbit", 1, 40);
console.log(obj1.name);
console.log(obj1.runspeed);
