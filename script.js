let password = document.querySelector('#password');
let cpassword = document.querySelector('#confirm-password');
let form = document.querySelector(`.form`);
let validity = false;
let passwdVal;

password.addEventListener('input', (e)=>{passwdVal = e.target.value;})

cpassword.addEventListener('input', (e)=>{
    let cPasswdVal= e.target.value;

    if (cPasswdVal == passwdVal){
        validity = true;
    } else{
        validity = false;
    }
})

form.addEventListener('submit', (e)=>{
    if(validity==false){
        e.preventDefault();
    }
})