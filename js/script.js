// Navbar Button
const navButton = document.querySelector("#nav-button");
const sideNav = document.querySelector("#side-nav");
const navCloseButton = document.querySelector("#nav-close-button");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav-line-active");
  sideNav.style.display = "block";
});

navCloseButton.addEventListener("click", () => {
  navButton.classList.toggle("nav-line-active");
  sideNav.style.display = "none";
});

// Navbar Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("nav-glass");
  } else {
    header.classList.remove("nav-glass");
  }
});
