const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');
const buttonBefore = document.querySelector('.slider__label--before');
const buttonAfter = document.querySelector('.slider__label--after');
const imageBefore = document.querySelector('.example__image--before');
const imageAfter = document.querySelector('example__image--after');

navMain.classList.remove('main-navigation--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
