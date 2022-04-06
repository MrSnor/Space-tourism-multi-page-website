const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")

// when menu is clicked
navToggle.addEventListener("click", () => {

  const visiblity = nav.getAttribute("data-visible")

  // if navbar isnt visible
  if (visiblity === "false") {
    nav.setAttribute("data-visible", "true")
    navToggle.setAttribute("aria-expanded", "true")
  }
  // if navbar is visible
  else {
    nav.setAttribute("data-visible", "false")
    navToggle.setAttribute("aria-expanded", "false")
  }
})

// TODO add this later; to close menu when it loses focus
navToggle.addEventListener('blur', () => {
  console.log("blurred")
  nav.setAttribute("data-visible", "false")
  navToggle.setAttribute("aria-expanded", "false")
})