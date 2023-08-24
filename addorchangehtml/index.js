//add or change html element

// const nametab = document.createElement("h1");
// nametab.innerHTML = window.prompt("enter yout name ");
// document.body.append(nametab);

// const nametabb = document.createElement("h1");
// nametabb.textContent = window.prompt("enter yout name ");
// document.body.append(nametabb);

const mylist = document.querySelector("#fruit");
const listitems = document.createElement("li");
// listitems.textContent = "cappp";
// mylist.append(listitems);
// listitems.textContent = "cappsdsdp";
// mylist.prepend(listitems);
listitems.textContent = "cappp";
mylist.insertBefore(listitems, mylist.getElementsByTagName("li")[2]);
