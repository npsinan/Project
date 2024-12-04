let menu = document.querySelector(".humburger");
let slideBar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
    slideBar.classList.toggle("sidebar2");
    document.body.classList.toggle("body2")
})