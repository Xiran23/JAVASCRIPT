
 console.log("runnnig");


function sum(a,b){
  z =a+b;
    console.log(z);
    console.log("RUnnings23")

}
sum(2,3);

 function repalce(name, age ){
    console.log("MY name is ",name,"my age is " ,age);
 }
 repalce("chiran",2323);


2<3 ? console.log("NEVERMIND") : console.log("IMIND"); 

let win= true;
win ? console.log("ITS TRue ") : console.log("its false");

// var can exist out side of {} but its limited with fucntions 


          //template literals 
          
          
            let username="CHIRAN";
             let age =23;
              let phonenumebr=982323;


              console.log(`MY name is ${username} . My age is ${age}.My phone number is ${phonenumebr}`);

let text=`MY name is ${username} . My age is ${age}.My phone number is ${phonenumebr}`
              document.getElementById("output").innerHTML = text;


              // arrow functon expression 
             
              console.log("result");
           const greeting = function(username){
            console.log(`the output is ${username}`);

           }

           
           greeting("chiran");
           
           const Greeting = (username)=> {console.log(username)};
           Greeting ("try 2 with Greeting ");



           const percentage = (marks,total)=>{
            percentagee = (marks/total)*100;
            console.log(`the percentage is ${percentagee}%`);
           }
           percentage(10,100);


           const sumofnumbers=(x,y,z) => total=x+y+z; // no return in require;

           console.log(sumofnumbers(1,1,1));

           // sorting number in ascending 
           let number = [2,3,4,12,23,4,5];
             
                       function ascending(x,y){
                        return y-x;
                       }

                                 number.sort(ascending);
                                 console.log(...number);
                                 

                                 function print(element){
                                  console.log.print(element);
                                 }



                                 number.sort((x,y)=>x-y);
                                 number.forEach((element)=>console.log(element));




         