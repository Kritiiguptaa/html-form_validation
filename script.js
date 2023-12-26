function error(){  
    var password =
        document.forms["RegForm"]["pass"].value;

    if(password.length<5){  
        alert("Password must be at least 5 characters long.");  
        password.focus();
        return false;  
        }
        return true;
}
// const password= document.getElementById('password')
// const form= document.getElementById('form')

// form.addEventListener('submit',(e)=>{
//     let messages=[]
//    if(password.value.lenght <5){
//     messages.push('Password must be at least 5 characters long')
//    }
// })