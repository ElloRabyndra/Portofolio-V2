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

// Contact Form
const contactForm = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, "Invalid email.");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required.");
    isValid = false;
  }

  if (isValid) {
    showSuccess();
    contactForm.submit();
    contactForm.reset();
  }
});

//  menampilkan Error
function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
  input.classList.add("error");
  input.parentElement.appendChild(error);

  setTimeout(() => {
    error.remove();
    input.classList.remove("error");
  }, 3000);
}

// Pesan Terkirim
function showSuccess() {
  const success = document.getElementById("success-message");
  console.log(success);
  success.classList.remove("hidden");
  setTimeout(() => {
    success.classList.add("hidden");
  }, 3000);
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => input.classList.remove("error"));
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Dark/Mode Button
const html = document.querySelector("html");
const modeButtons = document.querySelectorAll("#mode-button");

modeButtons.forEach((modebutton) => {
  modebutton.addEventListener("click", () => {
    modebutton.firstElementChild.classList.toggle("bxs-moon");
    html.classList.toggle("dark");
  });
});
