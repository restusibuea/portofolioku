let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let themeIcon = document.querySelector("#theme-icon");

themeIcon.onclick = () => {
  themeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("light-mode");
};
