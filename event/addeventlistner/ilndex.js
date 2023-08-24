const innderdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");

// innderdiv.addEventListener("mouseover", changered);
// innderdiv.addEventListener("mouseout", changegreen);

// function changered() {
//   innderdiv.style.backgroundColor = "red";
// }

// function changegreen() {
//   innderdiv.style.backgroundColor = "green";
// }

innderdiv.addEventListener("click", changeblue);
outerdiv.addEventListener("click", changeblue, true);

function changeblue() {
  alert(`${this.id}`);
  this.style.backgroundColor = "lightblue";
}
