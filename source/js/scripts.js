let noJS = document.querySelector('.main-nav');
let main_menu = document.querySelector('.main-nav__wrapper');
let main_button = document.querySelector('.main-nav__toggle');

noJS.classList.remove('main-nav--no-js');

main_button.addEventListener('click', () => {
  main_menu.classList.toggle('main-nav__wrapper--open');
  main_button.classList.toggle('main-nav__toggle--close');
});
