// print hello word in java console 
console.log("HELLO WORD");
console.log("CHIRAN");
 

// windows alert

// window.alert("ALERT AT TOP OF TAB");
// window.alert("open with delfult browser");
 


         // variable in a java <Store a data>
         //two steps 
        // 1. declareation (var,let,const)
        // 2.Assigment (= assignment operator)


        let student_age=23; //number 
        let student_name= "chiran"; //string
        let student= true; // boolean
        student_age= student_age+1;
        console.log("your age",student_age);
        console.log(student_name);
        console.log(student);
                    
        document.getElementById("p1").innerHTML = "hellow " +student_name  ;

        document.getElementById("p2").innerHTML = "my ages is " +student_age;
        document.getElementById("p3").innerHTML = "the condition is "+student+" ITS indeed"


        //userInput


         let username = window.prompt("Whats your name ?");
        // sdsdsdd
         console.log(username);



         let First_namee;
          
         document.getElementById("myButton").onclick = function(){
            First_namee= document.getElementById("mytext").value;
            console.log(First_namee);
            document.getElementById("myname").innerHTML = First_namee;
         }

         