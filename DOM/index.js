//Dom documnet object model
//use to change the content of an interface

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// document.title = "change in title";
// document.location = "http://www.google.com";

// document.body.style.background = "skyblue";
// document.getElementById("mydiv").innerHTML = "Chiran";

// let element = document.getElementById("mytitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");
// console.log(fruits[1]);

// fruits.forEach((fruits) => {
//   if (fruits.checked) {
//     console.log(fruits.value);
//   }
// });

// let vegetable = document.getElementsByTagName("li");
// vegetable[1].style.backgroundColor = "red";

// let Dessert = document.getElementsByClassName("dessert");
// Dessert[0].style.backgroundColor = "lightgreen";

// let desserts = document.getElementsByClassName("desserts");

// desserts[0].style.backgroundColor = "lightgreen";

/*

let element = document.querySelector("[for]");

element.style.backgroundColor = "lightgreen";

*/

/*

let elements = document.querySelectorAll("[for]");

elements.forEach(element => {

    element.style.backgroundColor = "lightgreen";

})

*/
//for  id #
// let element = document.querySelector("#mytitle");
// element.style.backgroundColor = "red";

//for class  .

// let element = document.querySelector(".dessert");
// element.style.backgroundcolor = "lightgreen";

// let element = document.querySelector("li");
// element.style.backgroundColor = "lightgreen";

let elements = document.querySelector("[for]");
elements.foreach((element) => {
  element.style.backgroundColor = "green";
});
