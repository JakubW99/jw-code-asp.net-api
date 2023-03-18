  document.getElementById("loginform").style.display="none";
  document.getElementById("registerform").style.display="none";

function funcLogin(){
    let login = document.querySelector("#login");
    let password = document.querySelector("#password");
    let xhr = new XMLHttpRequest();
    let url = "https://localhost:7183/api/Authenticate/login";


    xhr.open("POST", url, true);

 
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if ( xhr.status === 201 || xhr.status===200) {
            document.getElementById("loginform").style.display="none";
            document.getElementById("response").innerHTML += xhr.response;
        }
        else 
        {
        document.getElementById("status").innerHTML = "error: " +xhr.status;
        console.log('error');

        }
    };
    const data = JSON.stringify({ "username":login.value,"password":password.value });

    xhr.send(data);
}

function funcRegister(){
    let login = document.querySelector("#loginReg");
    let password = document.querySelector("#passwordReg");
    let email = document.querySelector("#emailReg");
    let xhr = new XMLHttpRequest();
    let url = "https://localhost:7183/api/Authenticate/Register";


    xhr.open("POST", url, true);

 
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if ( xhr.status === 201 || xhr.status===200) {
            document.getElementById("registerform").style.display="none";
            document.getElementById("response").innerHTML += xhr.response;
        }
        else 
        {
        document.getElementById("status").innerHTML = "error: " +xhr.status;
        console.log('error');

        }
    };
    const data = JSON.stringify({ "username":login.value,"email":email.value,"password":password.value });

    xhr.send(data);
}
function signIn()
{
     document.getElementById("registerform").style.display="none";
     document.getElementById("loginform").style.display="";
}
function signUp()
{
     document.getElementById("registerform").style.display="";
     document.getElementById("loginform").style.display="none";
}