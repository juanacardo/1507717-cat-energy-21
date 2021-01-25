var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");
var buttonBefore = document.querySelector(".slider__label--before");
var buttonAfter = document.querySelector(".slider__label--after");
var frameBefore = document.querySelector(".cat-slider__frame--before");
var frameAfter = document.querySelector(".cat-slider__frame--after");

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
    if (frameAfter.classList.contains("cat-slider__frame--hide")) {
      frameAfter.classList.remove("cat-slider__frame--hide");
      frameBefore.classList.add("cat-slider__frame--hide");
    }
  }
}

if(buttonBefore) {
  buttonBefore.onclick = function() {
    if (frameBefore.classList.contains("cat-slider__frame--hide")) {
      frameBefore.classList.remove("cat-slider__frame--hide");
      frameAfter.classList.add("cat-slider__frame--hide");
    }
  }
}
