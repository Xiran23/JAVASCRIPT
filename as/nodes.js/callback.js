let fruits = ["apple", "orange", "banana"];
const getfruits = () => {
  setTimeout(() => {
    fruits.forEach((data) => {
      console.log(data);
    });
  }, 1000);
};

const postfruit = (fruit, callbackfunction) => {
  setTimeout(() => {
    fruits.push(fruit);
    callbackfunction();
  }, 2000);
};

postfruit("Kiwi", getfruits);
