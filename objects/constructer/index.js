class player {
  player(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`this is ${this.name}`);
  }
}

const obj1 = new player("CHIRAN", 23, 23);
console.log(obj1.name);
obj1.study();
