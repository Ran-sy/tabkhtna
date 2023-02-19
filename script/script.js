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
  chkTabs()
  navMenuBtns.forEach(btn => btn.addEventListener("click", this.chkTabs))
}
function chkTabs() {
  if (navMenu) {
    navMenu.forEach(element => {
      let classes = element.getAttribute("class").split(" ")
      if (classes.indexOf("active") != -1) {
        element.classList.remove('hidden')
        element.classList.add('d-block')
        drawProducts(element.getAttribute('id'), element.getAttribute('tab-index'))
      }
      else {
        element.classList.remove('d-block')
        element.classList.add('hidden')
      }
    });
  }
}

/////////////////////////////////////////////////

function drawProducts(tabId, tabIndex) {
  console.log(tabId, tabIndex)
  fetch("./json/products.json")
    .then((res) => { return res.json(); })
    .then((data) => {
      let productTypeList = data[tabIndex][tabId];
      let mainDiv = document.getElementById(tabId + '-products')
        productTypeList.forEach((item) => {
            drawProductCard(item, tabId, productTypeList.length);
        })
      // console.log(data[0].dairy[0].id)
    });
}

/////////////////////////////////////////////////

function drawProductCard({ ...item }, tabId, length) {
  let mainDivId = tabId + '-products';
  if (!(document.getElementById(mainDivId))) {
    let docDiv = document.createElement("div")
    docDiv.classList.add("row", "row-cols-2", "row-cols-sm-4", "row-cols-lg-6", "g-3")
    docDiv.setAttribute("id", mainDivId)
    document.getElementById(tabId).appendChild(docDiv)
  }
  let mainDiv = document.getElementById(mainDivId)
  if (mainDiv.children.length != length){
  mainDiv.innerHTML +=
    `<div class="col">
      <div class="card">
        <img src=${item.imgUrl} style="max-height: 100px" class="card-img-top" alt=${item.title}>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <div class="d-flex justify-content-between">
            <p class="card-text text-dark-red">${item.price}جنيه</p>
            <p class="card-text">[${item.quantity} ${item.unit}]</p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

/////////////////////////////////////////////////

function chkUserLoggedIn() {
  let location = window.location.href.split("/");
  if (user.loggedIn && location[location.length - 1] == "index.html") {
    document.getElementById("helloUser").innerHTML = `${user.name}`;
    document.getElementById("loginBtn").classList.add('hidden')
    document.getElementById("registerBtn").classList.add('hidden')
  }
}
logoutBtn.addEventListener("click", () => {
  localStorage.clear()
  location.reload()
})