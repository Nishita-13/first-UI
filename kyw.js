function validate(){
    let name=document.getElementById("text").value;
    if(name==""){
        alert("Please enter your country");
        
    }
    else{
        window.location.assign("second.html");
        return;
    }
}

 function op(){
    let output=document.getElementById("div").innerHTML;
 }