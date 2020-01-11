var menuBars = document.querySelector(".menu-bars");
var closeBtn = document.querySelector(".close-nav");
var mainNav = document.querySelector(".main-nav");
var body = document.querySelector("body");
var navLinks = document.querySelectorAll(".main-nav-list li a");

menuBars.addEventListener("click", (e) => {
    mainNav.classList.add("open");
    body.setAttribute("style", "overflow: hidden");
})

closeBtn.addEventListener("click", (e) => {
    mainNav.classList.remove("open");
    body.setAttribute("style", "overflow: none");
})

navLinks = Array.from(navLinks);
console.log(navLinks);
navLinks.forEach(navLink => {
    navLink.addEventListener("click", (e) => {
        mainNav.classList.remove("open");
        body.setAttribute("style", "overflow: none");
    })
})
