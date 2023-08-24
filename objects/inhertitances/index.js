class Animal {
  alive = true;

  eat() {
    console.log(`this ${this.name} is eating`);
  }
  sleep() {}
}

class Rabbit extends Animal {
  name = "rabbit";
  walk() {
    console.log(`the animal can walk`);
  }
}
class Hwak extends Animal {
  name = "Hwak";
  fly() {
    console.log(`the animal can fly`);
  }
}

const obj1Rabbit = new Rabbit();
const obj1Hwak = new Hwak();
obj1Rabbit.eat();
obj1Hwak.fly();
