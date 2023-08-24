// console.log(navigator.cookieEnabled);
// document.cookie =
//   "firstname=Chiram; expire= Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);
// function setCookie(name, value, daystolive) {
//   const date = new Date();
//   date.setTime(date.getTime() + daystolive * 24 * 60);
// }
console.log(navigator.cookieEnabled);
setCookie("email", "heyheyeyh", 365);
function setCookie(name, value, daystolive) {
  const date = new Date();
  date.setTime(date.getTime() + daystolive * 24 * 60 * 60 * 1000);
  let expire = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value};${expire}; paths=/`;
}
console.log(document.cookie);

function deleteCookie(name) {
  setCookie(name, null, null);
}

deleteCookie("email");

function getCookie(name) {
  const c = decodeURIComponent(document.cookie);
 const arrya = c.split(";");
 arrya.forEach(element=>{if(element.indexOf(name)==0)
{
    result = 
}})
}
