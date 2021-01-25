var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");
var buttonBefore = document.querySelector(".slider__label--before");
var buttonAfter = document.querySelector(".slider__label--after");
var imageBefore = document.querySelector(".example__image--before");
var imageAfter = document.querySelector(".example__image--after");

navMain.classList.remove("main-navigation--no-js");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});

if(buttonAfter) {
  buttonAfter.onclick = function() {
    if (imageAfter.classList.contains("example__image--noshow")) {
      imageAfter.classList.remove("example__image--noshow");
      imageBefore.classList.add("example__image--noshow");
    }
  }
}

if(buttonBefore) {
  buttonBefore.onclick = function() {
    if (imageBefore.classList.contains("example__image--noshow")) {
      imageBefore.classList.remove("example__image--noshow");
      imageAfter.classList.add("example__image--noshow");
    }
  }
}
