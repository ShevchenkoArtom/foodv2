const body = document.querySelector(".body");
const burger = {
    btn: document.querySelector(".burgerBtn"),
    content: document.querySelector(".sidebar__content"),
    sidebar: document.querySelector(".sidebar")
}

burger.btn.addEventListener("click", function() {
    body.classList.toggle("scroll");
    burger.btn.classList.toggle("open");
    burger.sidebar.classList.toggle("open");
    burger.content.classList.toggle("open");
});