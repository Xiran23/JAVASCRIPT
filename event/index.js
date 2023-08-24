function doSomething() {
  alert("you did something");
}

// const element = document.getElementById("mybutton");
// element.onclick = doSomething;

// const element = document.body;
// element.onload = doSomething;

const element = document.getElementById("mytext");
element.onchange = doSomething;

const divv = document.getElementById("mydiv");
divv.style.backgroundColor = "lightgreen";
divv.style.width = "100px";
divv.style.height = "100px";

divv.onmouseover = changecolor;
divv.onmouseout = noral;
divv.onmousedown = noral;
function changecolor() {
  divv.style.backgroundColor = "red";
}
function noral() {
  divv.style.backgroundColor = "black";
}
