let l;
let b;
let c;



    document.getElementById("submitButton").onclick = function(){
        l = document.getElementById("length").value;
        l = Number(l);
        b = document.getElementById("breath").value;
        b = Number(b);

        c = Math.sqrt(Math.pow(l,2)+ Math.pow(b,2));
        document.getElementById("cLabel").innerHTML= "Side c :" + c ; 

    }