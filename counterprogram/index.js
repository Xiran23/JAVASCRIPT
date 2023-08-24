let count=0;

    document.getElementById("decrease").onclick = function(){
        count -=1;
        document.getElementById("countlabel").innerHTML = count;
    }
    
    
    document.getElementById("increase").onclick = function(){
        count +=1;
        document.getElementById("countlabel").innerHTML = count;
    }
    
    
    document.getElementById("reset").onclick = function(){
        count =0;
        document.getElementById("countlabel").innerHTML = count;
    }
    
    
    let Ncoutn=0;
      
         function increasecount(){
            Ncoutn +=1;
            document.getElementById("try2").innerHTML=Ncoutn;


         }
         function dec(){
            Ncoutn -=1;
            document.getElementById("try2").innerHTML=Ncoutn;


         }
