// DOM variables
var email = document.getElementById("email");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
// Storage variables
var storedEmail = localStorage.getItem("userEmail");
var storedPassword = localStorage.getItem("userPassword");

loginBtn.addEventListener("click", loginUser);

function loginUser() {
    if (email.value.trim() != "" && password.value != "") {
        if(email.value != storedEmail || password.value != storedPassword){
            alert("بريد الكتروني أو كلمة مرور غير صحيحة")
        }else{
            localStorage.setItem("userLoggedIn", true)
            location.assign("index.html")
        }
    } else {
        if (email.value === "") alert("يرجى ادخال البريد الإلكتروني المسجل");
        else alert("يرجى ادخال كلمة المرور");
    }
}