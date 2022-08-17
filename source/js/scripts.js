$(document).ready(function() {
  let noJS = document.querySelector('.main-nav');
  let main_menu = document.querySelector('.main-nav__wrapper');
  let main_button = document.querySelector('.main-nav__toggle');
  let main_logo = document.querySelector('.header__logo');

  noJS.classList.remove('main-nav--no-js');
  main_logo.classList.remove('header__logo--no-js');

  main_button.onclick = function () {
    main_menu.classList.toggle('main-nav__wrapper--open');
    main_button.classList.toggle('main-nav__toggle--close');
  };
});
