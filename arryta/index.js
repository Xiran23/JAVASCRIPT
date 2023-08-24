let name= ["chiran", "thapa", "Sulav", "alex"];

// console.log(name);


for(let i of name){
    console.log(i);
}



let row1=[[1,2,3],[4,5,6],[7,8,9]];
console.log(row1);

console.log(row1[1][0]);



let food= ["eat","drink","not"];
let eat = ["cow","buff","dog"];
let tate = ["elephetn ", "pasal", "owner"];

let rate =[food,eat,tate];


  console.log(rate);
   


    for(let i = 0;i<3;i++){
        for(let j= 0;j<3;j++){
            console.log(rate[i][j]);
        }
    }

    for(let rows of row1){
        console.log(row1);
    }


    for(let list of rate){
        for(let rates of list){
            console.log(rates);
        }
    }

  // spread operator 

    let number = [2,3,5,6,7,8,9,10];
    console.log(...number); // ... three dots 

  

    console.log(  Math.max(number));
    console.log(Math.max(...number));



    // here to merge two arrya 
 
let arrya1 = ["chiran", "thapa ","papa"];
let arrya2 = [ "alex " , "parsad " , "chapaghai "];

// console.log("arrya merge ");
// arrya1.push(arrya2)
 

// console.log(arrya1); // here whole arrya is pass down as element arrya2

arrya1.push(...arrya2)
console.log(...arrya1);


// reset paramaters 

let a = 0 ;
let b = 1 ; 
let c = 2 ; 
let d = 3 ;
let e = 4 ;
let f = 5 ;
console.log("sum of number functions ");

// console .log(sum(c,d,e,f));

function sum(...numbers){
    let total = 0 ;
    for(let num of numbers){
        
         total +=num;
        
    }
    return total;
}
function summ(a,b,c,...numbers){
    let total = 0 ;
    for(let num of numbers){
        
         total +=num;
        
    }
    return total;
}


//callback 
// passing function as a arugment 
    sum(2,4,displayDom);
    sum(2,4,condisplay);

function sum(x,y,callback){ // we came name callback with anu thing dosomething
    let result = x+y;
    callback(result);


}

function displayDom(output){
    document.getElementById("mylabel").innerHTML= output;
}
   function condisplay(result){
    console.log(result);
   }
// fucntion for first latter to capital 
   let user = "alexander"; 
   
   
   let firstlatter = user.charAt(0);
   
   firstlatter = firstlatter.toUpperCase();
   user = firstlatter+user.slice(1) ;
   console.log(user);


   // array.foreach()

  let students = ["chiran" , "thapa","alex"];
  students.forEach(toCapitalize);
  students.forEach(toPrint);
  

     // here element is name of elements index is list [0,1,2]
// we can use x y z insted of element index arrya 
  function toCapitalize(element,index,arrya){
    arrya[index]=element[0].toUpperCase()+ element.substring(1);  
  }  
  console.log(students[0]);
  
   function toPrint(element){
    console.log(element);   
   } 
//    let numbss = [1,2,3,4,5];
   
//    console.log(numbss);
//    let squaresss=numbss.map(square); 
   
//    function insquare(element,index,arrya){
//     arrya[index]=Math.pow(element,2);

//    }



   /// arrya.map() creates new arrya 
   let numbsss = [1,2,3,4,5];
   let sqqq = numbsss.map(square);

  
  
  
   sqqq.forEach(prrr);
  
   function square(element){
    return Math.pow(element,2)
   }

   function prrr(element){
    console.log(element);
   }
   // arrya.filter;

let students_ages=[14,23,45,46,22,33,66,77,1,2,4,3];

let here = students_ages.filter(checkAge);
console.log(here);


function checkAge(element){
    return element<=45;
}


// arrya.reduce() = reduce an arrya to single value 


let prices= [ 2,3 ];
let total = prices.reduce(checkout);
console.log(total);
 console.log(`the total amount is $ ${total}`);

 function checkout (total,element){
    return total + element;


 }
      

 let grade = [100,50,344,33,22,70 ];
 console.log(grade.sort());

 grade=grade.sort(descending_sort);
 console.log(grade);

   function descending_sort(x,y){
    return x-y;
   }

       // function expression 
   const greeting = function(){
    console.log("hello");

   }
   greeting();


