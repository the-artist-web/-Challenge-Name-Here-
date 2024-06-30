var HTML = document.documentElement;
var btnMood = document.querySelector("[data-btn-moon]");
var circle = document.querySelector("[data-circle]");
// localStorage
if (localStorage.getItem("theme") === "light") {
    HTML.dataset.theme = "light";
    circle.classList.add("active");
}
else {
    HTML.dataset.theme = "dark";
    circle.classList.remove("active");
}
btnMood.addEventListener("click", function () {
    if (HTML.dataset.theme === "light") {
        HTML.dataset.theme = "dark";
        circle.classList.remove("active");
        localStorage.setItem("theme", "dark");
    }
    else {
        HTML.dataset.theme = "light";
        circle.classList.add("active");
        localStorage.setItem("theme", "light");
    }
});
