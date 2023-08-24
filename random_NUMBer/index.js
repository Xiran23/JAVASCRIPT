let x;
let y;
let z;
//   x = Math.floor(Math.random()*6+1);

document.getElementById("mybutton").onclick= function(){
    x = Math.floor(Math.random()*6+1)
    document.getElementById("a").innerHTML= x;
    y = Math.floor(Math.random()*6+5)
    document.getElementById("b").innerHTML= y;
    z = Math.floor(Math.random()*6+8)
    document.getElementById("c").innerHTML= z;

}

  