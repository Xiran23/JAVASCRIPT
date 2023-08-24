// let x = document.getElementById("text");
// setTimeout(() => {
//   x.value = "2 sec";
// }, 2000);
// //.value
// //simialr to docmunet.getElementById("text").value
// setTimeout(() => {
//   x.value = "4 sec";
// }, 4000);
// setTimeout(() => {
//   x.value = "3 sec";
// }, 3000);
// setTimeout(() => {
//   x.value = "5 sec";
// }, 5000);

let item = "TERO";
let cost = "20";
let test1 = setTimeout(firstMessage(item, cost), 3000);
let test2 = setTimeout(secondMessage, 5000, item, cost);
let test3 = setTimeout(thirdmessage, 6000);
let test4 = setTimeout(thirdmessagee, 4000);

function firstMessage(item, cost) {
  alert(`but his ${item} for for ${cost}`);
}

function secondMessage() {
  alert(`second message `);
}
function thirdmessage() {
  alert(`hiohihihihihi`);
}
function thirdmessagee() {
  alert(`NOtblocked`);
}

document.getElementById("button").onclick = function () {
  clearTimeout(test1);
  clearTimeout(test2);
  clearTimeout(test3);
  alert(`it will stop pop up`);
};
