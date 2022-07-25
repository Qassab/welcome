const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const sideBar = document.querySelector(".side-bar");
const sideMenu = document.querySelector(".discription");
const closeMenu = document.querySelector(".fa-xmark");
const closeMeunBar = document.querySelector(".side-menu");
sideMenu.addEventListener("click", function () {
  sideBar.style.right = "5px";
  sideBar.style.transition = "1.5s ease-out";
});

closeMenu.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});

closeMeunBar.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});
