let username= "chiran";
let phonenumber="09999-9990888-999";

   console.log(username.length); // length of the string 
   console.log(username.charAt(0)); // first letter when 0   4th letter when 4 ;
   console.log(username.indexOf("a")); // postion of a in chiran
   console.log(username.lastIndexOf("a")); // last a found in word
   console.log(username.trim()); // trims out the empty space 
   console.log(username.toLowerCase());
   console.log(username.toLowerCase());
   
   
     console.log(phonenumber.replace("-","+"));
      console.log(phonenumber.replaceAll("-","+"));

    let fullName = "chiran raj thapa"; 
    let firstname;
    let midname;
    let lastname;


    firstname= fullName.slice(0,6);
    lastname=fullName.slice(11,16);
    midname=fullName.slice(7,10);

    console.log(firstname);

    console.log(midname);
    console.log(lastname);




    firstname=fullName.slice(0,fullName.indexOf(" "));
    lastname=fullName.slice(fullName.indexOf(" ")+1);

    console.log(firstname);

    // method channing 

     let ok = "bro";
       
     let letter = ok.charAt(0).toUpperCase().trim();
     console.log(letter);
     document.write("KEASf");





    