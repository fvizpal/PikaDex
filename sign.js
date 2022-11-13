

function login(){
    let loginUser=document.querySelector("#l-user").value;
    let loginPassword=document.querySelector("#l-password").value;

    let loginUserError=document.querySelector("#l-userError");
    let loginPassError=document.querySelector("#l-passError");

    if (!loginUser){
        loginUserError.textContent="*Enter username";
    }else{
        loginUserError.textContent="";
    }

    if (!loginPassword){
        loginPassError.textContent="*Enter your password"
    }else{
        loginPassError.textContent="";
    }
}

function signup(){
    let signupUser=document.querySelector(".s-username").value;
    let signupName=document.querySelector(".s-name").value;
    let signupPassword=document.querySelector(".s-password").value;
    let signupConfirm=document.querySelector(".s-confirmPassword").value;

    let signupUserError=document.querySelector(".s-userError");
    let signupNameError=document.querySelector(".s-nameError");
    let signupPassError=document.querySelector(".s-passError");
    let signupConfiError=document.querySelector(".s-confirmError");
    
    if(!signupUser){
        signupUserError.textContent="*Enter a username";
    }else{
        signupUserError.textContent="";
    }

    if (!signupName){
        signupNameError.textContent="*Enter your name";
    }else{
        signupNameError.textContent="";
    }

    if (!signupPassword){
        signupPassError.textContent="*Choose a password";
    }else{
        signupPassError.textContent="";
    }

    if (!signupConfirm){
        signupConfiError.textContent="*Confirm your password";
    }else{
        signupConfiError.textContent="";
    }

    if(signupPassword!=signupConfirm){
        signupConfiError.textContent="*Password not matched";
    }else{
        signupConfiError.textContent=""
    }

    if(signupUser && signupName && signupPassword && signupConfirm){
        let signupData={
            username: signupUser,
            name: signupName,
            password: signupPassword
        }

        exports=signupData;
    }
}

