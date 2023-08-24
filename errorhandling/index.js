try {
  let x = window.prompt("Enter a number #");
  x = Number(x);
  console.log("x is a number");
} catch (error) {
  console.log(error);
}
