const store = new Map([
  ["T-shirt", 20],
  ["jeans", 10],
  ["underwears", 23],
]);

store.forEach((value, key) => console.log(`the ${value} $${key}`));

console.log("Total shopping carts");

let totalcost = 0;
// get method
totalcost += store.get("T-shirt");
totalcost += store.get("underwears");
console.log(totalcost);

// set method
store.set("big shoes", 20);

// delete method
store.delete("underears");

// check wheather we have or not
console.log(store.has("T-shirt")); // if true we have the hats

console.log(store.size); // number of items in maps
