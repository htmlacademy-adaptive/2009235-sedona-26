const noJS = document.querySelector('.main-nav');
const main_menu = document.querySelector('.main-nav__wrapper');
const main_button = document.querySelector('.main-nav__toggle');

noJS.classList.remove('main-nav--no-js');

main_button.addEventListener('click', () => {
  main_menu.classList.toggle('main-nav__wrapper--open');
  main_button.classList.toggle('main-nav__toggle--close');
});
