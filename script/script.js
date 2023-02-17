function chk() { console.log("hi") }
window.onload = () => {
  displayContent();
  chkUserLoggedIn();
}
// variables
var navMenu = document.querySelectorAll(".nav-content .menuContent")
var navMenuBtns = document.querySelectorAll(".nav .navMenuBtn")
var logoutBtn = document.getElementById("logoutBtn")

var user = {
  name: localStorage.getItem("userFullName") ? localStorage.getItem("userFullName") : "",
  email: localStorage.getItem("userEmail") ? localStorage.getItem("userEmail") : "",
  number: localStorage.getItem("userNumber") ? localStorage.getItem("userNumber") : "",
  password: localStorage.getItem("userPassword") ? localStorage.getItem("userPassword") : "",
  loggedIn: localStorage.getItem("userLoggedIn") ? localStorage.getItem("userLoggedIn") : false
};

/////////////////////////////////////////////////

function displayContent() {
  // to check what TAB is the ACTIVE and close the others
  // chkTabs()
  navMenuBtns.forEach(btn => btn.addEventListener("click", this.chkTabs))
}
function chkTabs() {
  if (navMenu) {
    navMenu.forEach(element => {
      let classes = element.getAttribute("class").split(" ")
      if (classes.indexOf("active") != -1) {
        element.style.display = "block"
      }
      else {
        element.style.display = "none"
      }
    });
  }
}

/////////////////////////////////////////////////

class Product {
  constructor(id, title, quantity, imgUrl, price, unit) {
    this.id = id,
      this.title = title,
      this.quantity = quantity,
      this.imgUrl = imgUrl,
      this.price = price,
      this.unit = unit;
    getPrice = function () {
      return unit ? this.price + " " + this.unit : this.price;
    };
  }
}

/////////////////////////////////////////////////

function drawProducts() {
  fetch("./json/products.json")
    .then((res) => { return res.json(); })
    .then((data) => console.log(data[0].dairy[0].id));
}
drawProducts()

/////////////////////////////////////////////////

function chkUserLoggedIn() {
  let location = window.location.href.split("/");
  if (user.loggedIn && location[location.length - 1] == "index.html") {
    document.getElementById("helloUser").innerHTML = `${user.name}`;
    document.getElementById("loginBtn").style.display = "none"
    document.getElementById("registerBtn").style.display = "none"
  }
}
logoutBtn.addEventListener("click", () => {
  localStorage.clear()
  location.reload()
})