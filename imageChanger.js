
window.onload = imageChange
window.onresize = imageChange


function imageChange() {
  // media query for checking if screen is greater than 55em
  const mediaQueryMin = window.matchMedia('(min-width: 55em)')

  const pictureElement = document.querySelector("picture")

  // Check if the media query is true
  if (mediaQueryMin.matches) {
    // display portrait image if media query is true
    pictureElement.children[0].style.display = "none"
    pictureElement.children[1].style.display = "block"
  } else {
    // display landscape image if media query is false
    pictureElement.children[0].style.display = "block"
    pictureElement.children[1].style.display = "none"
  }
}




