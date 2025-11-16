const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgericon = header.querySelector(".burger");

burger.addEventListener("click", function() {
header.classList.toggle("header-mobile");

if (header.classList.contains("header-mobile")) {
    burgericon.src = "images/burger-close-menu.svg"
} else {
    burgericon.src = "images/burger-menu.svg"
}

});