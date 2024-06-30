const HTML: any = document.documentElement;
const btnMood: any = document.querySelector("[data-btn-moon]");
const circle: any = document.querySelector("[data-circle]");

// localStorage
if (localStorage.getItem("theme") === "light") {
    HTML.dataset.theme = "light";
    circle.classList.add("active");
} else {
    HTML.dataset.theme = "dark";
    circle.classList.remove("active");
}

btnMood.addEventListener("click", () => {
    if (HTML.dataset.theme === "light") {
        HTML.dataset.theme = "dark";
        circle.classList.remove("active");
        localStorage.setItem("theme", "dark");
    } else {
        HTML.dataset.theme = "light";
        circle.classList.add("active");
        localStorage.setItem("theme", "light");
    }
});