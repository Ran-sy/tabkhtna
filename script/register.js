var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var number = document.getElementById("number");
var password = document.getElementById("password");
var agreeToTerms = document.getElementById("agreeToTerms");
var registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", registerUser);

function registerUser() {
    if (fullName.value.trim() != "" && email.value.trim() != "" && number.value.trim() != "" && password.value != "" && (agreeToTerms.checked)) {
        console.log(fullName.value.trim(), email.value.trim(), number.value.trim(), password.value)
        window.localStorage.setItem("userFullName", fullName.value.trim());
        window.localStorage.setItem("userEmail", email.value.trim());
        window.localStorage.setItem("userNumber", number.value.trim());
        window.localStorage.setItem("userPassword", password.value);
        window.localStorage.setItem("userLoggedIn", false)
        location.assign("login.html")
    } else if (fullName.value.trim() === "" || email.value.trim() === "" || number.value.trim() === "" || password.value === "") {
        alert("يرجى اكمال كافة البيانات")
    } else {
        alert("يرجى الموافقة على السياسات والخصوصية");
    }
}