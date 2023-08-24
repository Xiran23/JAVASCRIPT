let fruits = ["apple", "Banana", "orange"];

const getfruit = () => {
  setTimeout(() => {
    fruits.forEach((data) => {
      console.log(data);
    });
  }, 1000);
};

const postFruits = (fruit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fruits.push(fruit);

      let err = false;
      if (!err) {
        resolve();
      } else {
        reject("some thing went wrong");
      }
    }, 2000);
  });
};

postFruits("kiwi")
  .then(getfruit)
  .catch((err) => {
    console.log(err);
  });
