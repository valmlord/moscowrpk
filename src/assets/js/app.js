// HAMBURGER

const menu = document.querySelector(".mobile-menu"),
      menuItem = document.querySelectorAll(".mobile-menu__list-link"),
      hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active"),
    menu.classList.toggle("mobile-menu--active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    menu.classList.toggle("mobile-menu--active");
  });
});