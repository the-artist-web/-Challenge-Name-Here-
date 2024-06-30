"use strict";
const HTML = document.documentElement;
const btnMood = document.querySelector("[data-btn-moon]");
const circle = document.querySelector("[data-circle]");
if (localStorage.getItem("theme") === "light") {
    HTML.dataset.theme = "light";
    circle.classList.add("active");
}
else {
    HTML.dataset.theme = "dark";
    circle.classList.remove("active");
}
btnMood.addEventListener("click", () => {
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
//# sourceMappingURL=main.js.map