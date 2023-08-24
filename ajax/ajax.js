let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickhandler)



function buttonClickhandler(){
    //Instatnitate and xhr object
    console.log("but presesed");

    const xhr = new XMLHttpRequest();
    
    // open the object 

    xhr.open('GET','harry.txt',true);

    //what do on progress //optional 
    xhr.onprogress = function (){
        console.log('on progress');
        // /we can show spinner ; 
    }

    //old fucntion 
    xhr.onreadystatechange = function(){
        console.log('ready state is ', this.readyState);

    }

    //what to do when progress is ready 
    xhr.onload = function(){
        if(this.status === 200){

            console.log(this.responseText);
        } 
        else {
            console.log("some error has occured");
        }
 
    
}
//send the request 

xhr.send();
    
}