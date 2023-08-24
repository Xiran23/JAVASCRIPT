let count = 0;
let max = window.prompt("enter the value #");
max = Number(max);

const mytimer = setInterval(countup, 1000);

function countup() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(mytimer);
  }
}
