// let date = new Date();
// date = date.toLocaleString();

setInterval(interval, 1000);

function interval() {
  let date = new Date();
  date = date.toLocaleString();
  document.getElementById("update").innerHTML = date;
}
