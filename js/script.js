"use strict"


//* HEADER */
const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
const bodyLock = document.body;

iconMenu.addEventListener('click', function (e) {
  toggleMenu(); //Добавить классы
  e.preventDefault();
});

function toggleMenu() {
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  bodyLock.classList.toggle('lock');
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuBody.classList.contains('_active')) {
      toggleMenu(); //Убрать классы
    }
  });
})

//* HEADER */




















