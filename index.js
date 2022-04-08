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

// to close menu when it loses focus
navToggle.addEventListener('blur', () => {
  console.log("blurred")
  nav.setAttribute("data-visible", "false")
  navToggle.setAttribute("aria-expanded", "false")
})

// ~~ for in-page tabs ~~

let tabsJSONData;

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    tabsJSONData = data;
  })

const destTabs = document.querySelectorAll("#destination-tabs > *")

// in-page tab manipulation for destination page
destTabs.forEach((value, index) => {

  // listen for click on tabs
  value.addEventListener('click', (e) => {
    
    removeBorder()
    // add border to selected tab
    e.target.setAttribute("aria-selected", "true")

    // get id of parent div to be used to relate data from json file
    const reqTabId = e.target.parentElement.id
    // get respective data of clicked tab by relating it to index
    const respectiveDataFromJSON = tabsJSONData[reqTabId][index]

    const planetName = document.querySelector("#planetName")
    const planetDescription = document.querySelector("#description")
    const planetImages = document.querySelector("#main > picture")
    const planetDistance = document.querySelector("#distance")
    const planetTravel = document.querySelector("#travel")

    // replacing html values with data from json file

    planetName.textContent = respectiveDataFromJSON.name

    planetDescription.textContent = respectiveDataFromJSON.description

    planetDistance.textContent = respectiveDataFromJSON.distance

    planetTravel.textContent = respectiveDataFromJSON.travel

    planetImages.children[0].srcset = respectiveDataFromJSON.images.webp

    planetImages.children[1].src = respectiveDataFromJSON.images.png


    e.preventDefault()
  })
});

// to remove "highlight/selected border" from tab 
function removeBorder() {
  destTabs.forEach(item => item.setAttribute("aria-selected", "false"))
}