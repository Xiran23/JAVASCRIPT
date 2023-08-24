let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickhandler)



function buttonClickhandler(){
    //Instatnitate and xhr object
    console.log("but presesed");

    const xhr = new XMLHttpRequest();
    
    // open the object 

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //use this for post 
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

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

// xhr.send();
params = `{"name":"test34sad545","salary":"123","age":"23"}`;
xhr.send(params);

console.log("We are done!");
    
}