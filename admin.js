import 'style.css';

// Use DOM to insert text in an element
const form = document.getElementsById("forms");
// write a function to connect to the listner
function onSubmit(event) {
   event.preventDefault(); 
   const email= form.elements["email"].value;
   const password = form.elements["password"].value;
   
   
   if (email.length == 0){
    form.elements["email"].style.border = "2px solid";
    form.elements["email"].style.borderColor = "red";
  }else {
    form.elements["email"].style.border = "none";
  }

  if (password.length == 0){
    form.elements["password"].style.border = "2px solid";
    form.elements["password"].style.borderColor = "red";
  }else {
    form.elements["password"].style.border = "none";
  }
  
  

   if (email.length == 0 || password.length == 0 ){
    const error = document.getElementsByClassName('form-errors');
     error.innerHTML = "Email or Password is invalid.";
   }
    
   
}
// attach function to the form "submit" event.
form.addEventListener('submit',onSubmit)