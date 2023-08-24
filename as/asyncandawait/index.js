let fruits = ["apple", "Banana", "orange"];

const getfruits = () => {
  setTimeout(
    () => {
      fruits.forEach((data) => console.log(data));
    },

    1000
  );
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

const init = async () => {
  try {
    await postFruits("kiwiw"); // tells to wait first postfruits executes then get fruites
    getfruits();
  } catch (err) {
    console.log(err);
  }
};
init();
